from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

@app.get("/hello")
def hello():
    return {"message": "Hello, Brad!"}

@app.get("/ping")
def ping():
    return {"ping" : "pong"}

class EchoInput(BaseModel):
    text: str

@app.post("/echo")
def echo_text(input: EchoInput):
    return {"you_said": input.text}