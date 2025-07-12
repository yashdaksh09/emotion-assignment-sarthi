from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ReflectionRequest(BaseModel):
    text: str

@app.post("/analyze")
def analyze(request: ReflectionRequest):
    return {
        "emotion": random.choice(["Sad", "Happy", "Confident"]),
        "confidence": round(random.uniform(0.7, 0.99), 2)
    }
