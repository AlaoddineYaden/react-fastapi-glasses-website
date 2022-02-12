import fastapi
import uvicorn
import fastapi_chameleon
from fastapi_chameleon import template
from starlette.staticfiles import StaticFiles

router = fastapi.APIRouter()


@router.get("/api")
async def index():
    return {"message": "hello alao"}


@router.get("/api/about")
async def about():
    return {"message": "about"}
