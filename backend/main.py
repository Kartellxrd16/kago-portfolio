from fastapi import FastAPI
from routes.contactForm import router as contact_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS for your frontend domain
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can specify your frontend URL here
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the contact form router
app.include_router(contact_router)

@app.get("/")
async def read_root():
    return {"message": "Welcome to the FastAPI backend!"}