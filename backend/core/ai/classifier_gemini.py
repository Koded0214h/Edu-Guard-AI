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
    You are an AI assistant for an academic scam reporting tool called EduGuard AI.

    Analyze the following user report:
    "{message}"

    Return:
    1. Classification: Scam / Legitimate / Uncertain
    2. Reason: Explain briefly
    3. Location or Institution Mentioned: (if found, otherwise "None")
    4. Confidence: (Between 0 and 1)

    Return in this format exactly:
    Classification: <value>
    Reason: <value>
    Location: <value>
    Confidence: <float 0-1>
    """

    try:
        response = model.generate_content(prompt)
        text = response.text.strip()
        lines = text.split('\n')

        classification = next((l.split(':')[1].strip() for l in lines if l.lower().startswith("classification")), "Uncertain")
        reason = next((l.split(':', 1)[1].strip() for l in lines if l.lower().startswith("reason")), "No reason provided.")
        location = next((l.split(':', 1)[1].strip() for l in lines if l.lower().startswith("location")), None)
        confidence = next((l.split(':')[1].strip() for l in lines if l.lower().startswith("confidence")), None)

        return classification, reason, location, float(confidence) if confidence else None

    except Exception as e:
        print("Error from Gemini classification:", e)
        return "Uncertain", "Error occurred during classification.", None, None
