from fastapi import FastAPI
from routers.users_router import router as users_router
from database.db_connection import init_db
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins =[
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


app.include_router(users_router, prefix="/users", tags=["users"])

# Initialize DB at startup
@app.on_event("startup")
def on_startup():
    init_db()

@app.get("/")
def read_root():
    return {"Hello": "World"}


