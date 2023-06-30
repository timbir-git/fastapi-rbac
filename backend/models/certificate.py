from models.common import Table, fields


class CertificateModel(Table):
    """
    证书模型类 > certificate table
    """

    domain = fields.CharField(max_length=128, description="域名", unique=True)
    duration = fields.IntField(max_value=5, description="有效期", null=True)
    watch = fields.BooleanField(description="是否检测")
    remain = fields.IntField(max_value=5, description="剩余期限", null=True)
    remark = fields.CharField(max_length=256, description="备注")

    class Meta:
        table = "tool_certificate"
        table_description = "证书表"
        # 索引
        unique_together = ("domain",)
