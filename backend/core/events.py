import tenacity as tenacity
from tortoise import Tortoise
from core.settings import config


@tenacity.retry(wait=tenacity.wait_fixed(5), stop=tenacity.stop_after_attempt(3))
async def init_orm():
    """初始化orm"""
    # await Tortoise.init(db_url="sqlite://mini.db", modules={"models": ["models"]})
    await Tortoise.init(db_url=f"mysql://{config.mysql_user}:{config.mysql_password}"
                               f"@{config.mysql_address}:{config.mysql_port}/{config.mysql_db_name}",
                        modules={"models": ["models"]})
    await Tortoise.generate_schemas()


async def close_orm():
    """关闭orm"""
    await Tortoise.close_connections()
