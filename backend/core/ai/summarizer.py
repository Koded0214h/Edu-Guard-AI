import google.generativeai as genai
from decouple import config

genai.configure(api_key=config("GEMINI_API_KEY"))
model = genai.GenerativeModel(model_name="models/gemini-2.0-flash")

def summarize_text(message: str):
    prompt = f"""
    Summarize the following student report in 1 sentence.

    Report:
    "{message}"

    Summary:
    """
    try:
        response = model.generate_content(prompt)
        return response.text.strip()
    except Exception as e:
        print("Summarization error:", e)
        return "Summary not available."
