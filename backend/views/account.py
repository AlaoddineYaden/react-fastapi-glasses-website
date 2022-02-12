from re import T
from tkinter.messagebox import NO
import fastapi
import uvicorn
from services.user_service import register
import fastapi_chameleon
from fastapi_chameleon import template
from starlette import status
from starlette.staticfiles import StaticFiles

from services.user_service import get_user

router = fastapi.APIRouter()
is_logged_in = False
users = [
    {
        "email": "a@a.com",
        "pass": "alao"
    },
    {
        "email": "am@am.com",
        "pass": "miko"
    }
]


@router.get("/login")
async def login_get():
    return is_logged_in


@router.post("/login")
async def login_post(user: dict):
    userinfo = get_user(user["email"], user["pass"])
    if userinfo:
        is_logged_in = True
    return userinfo


@router.get("/register")
async def register_get():
    return is_logged_in

@router.post("/register")
async def register_get(user: dict):
    se = register(user["name"], user["email"], user["pass"])
    if se is None:
        is_logged_in = True
    return se
