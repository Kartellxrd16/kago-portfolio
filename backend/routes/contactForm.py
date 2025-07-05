from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

router = APIRouter()

# Define the request body structure
class ContactForm(BaseModel):
    name: str
    email: str
    message: str

@router.post("/contact")
async def send_contact_form(contact: ContactForm):
    try:
        # Get email details from environment variables
        sender_email = os.getenv("SENDER_EMAIL")
        receiver_email = os.getenv("RECEIVER_EMAIL")
        password = os.getenv("EMAIL_PASSWORD")

        # Create the email message
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = receiver_email
        msg['Subject'] = f"New Message from {contact.name}"

        # Email body
        body = f"Name: {contact.name}\nEmail: {contact.email}\nMessage:\n{contact.message}"
        msg.attach(MIMEText(body, 'plain'))

        # Set up the server
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(sender_email, password)
            server.send_message(msg)

        return {"message": "Message sent successfully."}

    except Exception as e:
        print(f"Error sending email: {str(e)}")  # Log the error for debugging
        raise HTTPException(status_code=500, detail=str(e))