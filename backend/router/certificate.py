from fastapi import APIRouter, Depends, Request

from schemas import common as BaseSchema
from schemas import certificate as CertificateSchema
from service.certificate import service as CertificateService
from schemas.common import QueryData

from tortoise.exceptions import IntegrityError
from core.exceptions import InternalError

router = APIRouter(prefix="/certificate", tags=["证书管理"])

Response = BaseSchema.Response

# 查列表时的模型
ListAll = BaseSchema.ListAll
certificate_list_schema = ListAll[list[CertificateSchema.CertificateRead]]


@router.post("", summary="域名新增")
async def certificate_add(data: CertificateSchema.CertificateAdd) -> Response[CertificateSchema.CertificateRead]:
    return await CertificateService.create_item(data)


@router.get("", summary="域名列表")
async def certificate_list(query: QueryData = Depends()) -> Response:
    return await CertificateService.get_items(query.offset, query.limit)


@router.delete("/{pk}", summary="域名删除")
async def certificate_del(pk: int) -> Response:
    return await CertificateService.delete_item(pk)


@router.put("/{pk}", summary="域名更新")
async def certificate_put(pk: int, data: CertificateSchema.CertificateBasic) -> Response:
    """域名更新"""
    return await CertificateService.update_item(pk, data)


@router.post("/query", summary="证书查询")
async def certificate_query(query: CertificateSchema.CertificateQuery) -> Response[certificate_list_schema]:
    return await CertificateService.query_items(query)


@router.get("/check", summary="证书检测")
async def certificate_check() -> Response:
    return await CertificateService.check_ssl()
