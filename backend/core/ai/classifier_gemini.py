import google.generativeai as genai
from decouple import config

# Load your API key securely from .env file
GEMINI_API_KEY = config("GEMINI_API_KEY")

# Configure Gemini
genai.configure(api_key=GEMINI_API_KEY)

# Use a faster model with reasonable quality
model = genai.GenerativeModel(model_name="models/gemini-2.0-flash")

def classify_text_with_gemini(message: str):
    prompt = f"""
You are a scam detection assistant for an academic protection platform called EduGuard AI.

A student has submitted this message:
"{message}"

Classify this message as one of the following:
- Scam
- Legitimate
- Uncertain

Then, explain why it was classified that way in 5 sentences.

Return the result in this format exactly:
Classification: <Scam/Legitimate/Uncertain>
Reason: <short explanation>
"""

    try:
        response = model.generate_content(prompt)
        text = response.text.strip()

        # Basic parsing
        lines = text.split('\n')
        classification = next((l.split(':')[1].strip() for l in lines if l.lower().startswith("classification")), "Uncertain")
        reason = next((l.split(':', 1)[1].strip() for l in lines if l.lower().startswith("reason")), "No reason provided.")
        
        return classification, reason

    except Exception as e:
        print("Error from Gemini classification:", e)
        return "Uncertain", "Error occurred during classification."

