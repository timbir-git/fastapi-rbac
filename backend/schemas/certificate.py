from typing import Optional

from pydantic import BaseModel, Field

from schemas.common import ReadBase, QueryData


class CertificateBasic(BaseModel):
    domain: str = Field(..., description="域名地址")
    duration: int = Field(default=None, description="证书期限（天）")
    watch: bool = Field(default=0, description="检测，0关闭，1开启")
    remain: int = Field(description="剩余天数")
    remark: Optional[str] = Field(default=None, description="备注")


class CertificateRead(CertificateBasic, ReadBase):
    pass


class CertificateAdd(CertificateBasic):
    pass


class CertificateQuery(QueryData):
    """查询模型"""

    domain: Optional[str] = Field("", description="域名地址")
    duration: Optional[int] = Field("", description="证书期限（天）")
    watch: Optional[int] = Field("", description="检测，0关闭，1开启")
    remain: Optional[int] = Field("", description="剩余天数")
    remark: Optional[str] = Field("", description="备注")
