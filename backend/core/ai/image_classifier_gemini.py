import google.generativeai as genai
from PIL import Image
from io import BytesIO
from decouple import config

genai.configure(api_key=config("GEMINI_API_KEY"))
model = genai.GenerativeModel("models/gemini-1.5-flash")

def classify_image_with_gemini(django_image_file):
    image_bytes = django_image_file.read()
    image = Image.open(BytesIO(image_bytes))

    prompt = """
    You are a scam detection assistant for an academic safety platform called EduGuard AI.

    A user has uploaded the following document or image for verification. Your job is to analyze it and classify it as one of these categories:

    - Scam: if it appears to be a forged result slip, fake scholarship offer, or deceptive document.
    - Legitimate: if the document appears genuine and official.
    - Uncertain: if you can't confidently decide.

    Then explain your classification in 1–2 sentences.

    Return result in this format:
    Classification: <Scam/Legitimate/Uncertain>
    Reason: <short explanation>
    """

    try:
        response = model.generate_content([prompt, image])
        text = response.text.strip()

        # Attempt to parse response
        lines = text.split('\n')
        classification = lines[0].split(':')[1].strip()
        reason = lines[1].split(':', 1)[1].strip()

        return classification, reason
    except Exception as e:
        return "error", str(e)
