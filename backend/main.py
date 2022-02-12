from pathlib import Path

import fastapi
import uvicorn
import fastapi_chameleon
from starlette.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

from data import db_session
from views import account
from views import home

app = fastapi.FastAPI()
origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


def main():
    configure(dev_mode=True)
    uvicorn.run(app,  host='127.0.0.1', port=8000, debug=True)


def configure_db(dev_mode: bool):
    file = (Path(__file__).parent / 'db' / 'pypi.sqlite').absolute()
    db_session.global_init(file.as_posix())


def configure(dev_mode: bool):
    # configure_templates()
    configure_db(dev_mode)
    configure_routes()


# def configure_templates():
#     pass


def configure_routes():
    app.include_router(home.router)
    app.include_router(account.router)


if __name__ == '__main__':
    main()
else:
    configure(dev_mode=False)
