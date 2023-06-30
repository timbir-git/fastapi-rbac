from fastapi.exceptions import HTTPException, RequestValidationError
from starlette.requests import Request
from starlette.responses import JSONResponse, PlainTextResponse, RedirectResponse


class TokenAuthFailure(HTTPException):
    pass


class PermissionsError(HTTPException):
    pass


class InternalError(HTTPException):
    pass


async def not_found_handler(request, exc):
    return RedirectResponse(url="/")


async def http_exception(request: Request, exc: HTTPException, data: str = None):
    return JSONResponse(
        {"msg": exc.detail, "code": exc.status_code, "data": data},
        status_code=exc.status_code,
        headers=exc.headers,
    )


exception_handlers = {
    HTTPException: http_exception,
    # 404: not_found_handler,
    }
