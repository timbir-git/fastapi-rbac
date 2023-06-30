from datetime import datetime

from apscheduler.schedulers.asyncio import AsyncIOScheduler
from router.certificate import certificate_check
from core.log import logger
from core.settings import config
from models.certificate import CertificateModel
from core.utils import send_email

scheduler = AsyncIOScheduler()


# @scheduler.scheduled_job('date', id='cert_check', run_date=datetime.now())
# @scheduler.scheduled_job('interval', id='cert_check', hours=config.certificate_check_interval)
@scheduler.scheduled_job('cron', id='cert_check', day_of_week='*',
                         hour=config.certificate_check_time[0],
                         minute=config.certificate_check_time[1],
                         second=config.certificate_check_time[2], )
async def check_certificate():
    logger.info(f"开始执行证书检测任务: {check_certificate.__name__}")
    await certificate_check()
    logger.info("定时任务执行完毕。")


@scheduler.scheduled_job('cron', id='cert_email', day_of_week='*',
                         hour=config.certificate_alert_time[0],
                         minute=config.certificate_alert_time[1],
                         second=config.certificate_alert_time[2], )
async def send_alart_email():
    logger.info(f"开始执行证书检测任务: {send_alart_email.__name__}")
    alert_domains = await CertificateModel.filter(remain__in=config.certificate_days_remaining).all()
    for domain in alert_domains:
        await send_email(mail_receiver=config.mail_receiver,
                         mail_subject='SSL证书到期提醒',
                         mail_content=f"""
                                域名：{domain.domain} <br>
                                剩余有效期：<strong>{domain.remain}</strong> 天 <br>
                                备注：{domain.remark} <br>
                                更新时间：{domain.modified} <br>
                                """)
    logger.info("定时任务执行完毕。")
