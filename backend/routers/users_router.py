from fastapi import APIRouter
from services.users_service import create_user, user_login, get_all_user


router = APIRouter()

@router.post("/signup",response_model=dict)
def signup_user(body:dict):
    username = body.get("username")
    password = body.get("password")
    email = body.get("email")
    return create_user(username, password, email)

@router.post("/login",response_model=dict)
def login_user(body:dict):
    email = body.get("email")
    password = body.get("password")
    return user_login(email, password)


@router.get("/list",response_model=dict)
def fetch_all_user():
    return get_all_user()

