import asyncio
import datetime

from core.log import logger

from core.dbhelper import CertificateDao
from core.service import Service

from models.certificate import CertificateModel
from core.utils import get_ssl_expire_async


class CertificateService(Service):
    def __init__(self):
        super(CertificateService, self).__init__(CertificateDao)

    async def create_item(self, data):
        """创建域名"""
        # 检查域名是否存在
        if await self.dao.select({"domain": data.domain, "status": 1}) is not None:
            return dict(code=400, msg="域名已存在")
        # 写入数据
        certificate_obj = await CertificateDao.insert(data.dict())
        return dict(data=certificate_obj)

    async def update_item(self, pk, data):
        """
        更新数据,不通用，可重写
        :param pk: 主键
        :param data: pydantic model
        :return:
        """
        exist_record = await self.dao.select({"domain": data.domain, "status": 1})
        if exist_record is not None and exist_record.id != pk:
            return dict(code=400, msg="域名已存在")
        if await self.dao.update({"id": pk}, data.dict()) == 0:
            return dict(code=400, msg="数据不存在")
        return dict()

    async def check_ssl(self, pk=None, data=None):
        domains_dict = await CertificateModel.all().values('id', 'domain', 'watch', 'status')
        # 并行检测域名证书
        run_list = [get_ssl_expire_async(d['domain']) for d in domains_dict if d['watch'] == 1 and d['status'] != 9]
        results = await asyncio.gather(*run_list)

        for result in results:
            if result['status']:
                await self.dao.update({"domain": result['domain']},
                                      {'duration': result['duration_days'], 'remain': result['expire_days'],
                                       'modified': datetime.datetime.now()
                                       })
            else:
                await self.dao.update({"domain": result['domain']},
                                      {'duration': -1, 'remain': 0})
        logger.info(results)
        ok_num = len([i for i in results if i['status'] is True])
        return dict(code=200, msg=f'检测域名{len(results)},更新信息{ok_num}')


service = CertificateService()
