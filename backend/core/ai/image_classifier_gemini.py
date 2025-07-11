import json
import re
import google.generativeai as genai
from PIL import Image
from io import BytesIO
from decouple import config

# Configure Gemini API key
genai.configure(api_key=config("GEMINI_API_KEY"))

# Separate models for text and image tasks
token_model = genai.GenerativeModel("models/gemini-2.0-flash")
image_model = genai.GenerativeModel("models/gemini-1.5-flash")


def classify_image_with_gemini(django_image_file):
    """
    Analyze an uploaded document image and classify as Scam, Legitimate, or Uncertain.
    Returns (classification: str, reason: str).
    """
    try:
        django_image_file.seek(0)
        image = Image.open(django_image_file)
        image.load()
    except Exception as e:
        print("Failed to open image:", e)
        return "error", "Unreadable image"

    prompt = (
        "You are an AI assistant verifying academic documents.\n"
        "Classify the uploaded document (e.g., admission letter, result slip) as:\n"
        "- Scam: forged or fake.\n"
        "- Legitimate: authentic and official.\n"
        "- Uncertain: insufficient visual evidence.\n"
        "Explain in 1–2 sentences and respond exactly:\n"
        "Classification: <value>\n"
        "Reason: <short explanation>"
    )
    try:
        response = image_model.generate_content([prompt, image])
        text = response.text.strip()
        lines = text.split('\n')
        classification = next((l.split(':', 1)[1].strip() for l in lines if l.lower().startswith("classification")), "Uncertain")
        reason = next((l.split(':', 1)[1].strip() for l in lines if l.lower().startswith("reason")), "No reason provided.")
        return classification, reason
    except Exception as e:
        print("Image classification error:", e)
        return "error", str(e)