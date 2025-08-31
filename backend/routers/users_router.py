from fastapi import APIRouter
from services.users_service import create_user, user_login


router = APIRouter()

@router.post("/signup",response_model=dict)
def signup_user(body:dict):
    username = body.get("username")
    password = body.get("password")
    email = body.get("email")
    return create_user(username, password, email)

