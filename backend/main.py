import datetime
from fastapi import Depends, FastAPI

from core.events import close_orm, init_orm
from core.exceptions import exception_handlers
from core.middleware import middlewares
from core.security import check_permissions
from core.utils import load_routers, send_email
from core.log import logger
from core.schedulers import scheduler


app = FastAPI(
    on_startup=[init_orm],
    on_shutdown=[close_orm],
    middleware=middlewares,
    exception_handlers=exception_handlers,
)

load_routers(app, "router", no_depends="auth", depends=[Depends(check_permissions)])


# 定时任务
@app.on_event("startup")
async def start_event():
    scheduler.start()
    logger.info("---定时任务启动成功---")
    for job in scheduler.get_jobs():
        logger.info(datetime.datetime.now())
        logger.info(job)


# app.mount("/static", StaticFiles(directory="static"), name="static")


# @app.get("/", response_class=HTMLResponse)
# async def index():
#     with open("static/index.html") as f:
#         html = f.read()
#     return html


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", reload=True, port=8000)
