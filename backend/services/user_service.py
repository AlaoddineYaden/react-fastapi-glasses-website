from datetime import datetime
import re
from typing import Optional

from data import db_session
from data.user import User


def register(nom: str, email: str, password: str):
    session = db_session.create_session()
    try:
        user = User(name=nom, email= email, hashed_password= password)
        session.add(user)
        se = session.commit()
        print(se)
        return se
    finally:
        session.close()




def get_user(email: str, password: str) -> Optional[bool]:
    session = db_session.create_session()
    try:
        user_email = session.query(User).filter(User.email == email).first()
        user_pass = session.query(User).filter(User.hashed_password == password).first()
        if user_email != None and user_pass != None:
            return True
        return False
    finally:
        session.close()
