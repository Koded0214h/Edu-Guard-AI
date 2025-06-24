import google.generativeai as genai
from decouple import config

genai.configure(api_key=config("GEMINI_API_KEY"))
model = genai.GenerativeModel(model_name="models/gemini-2.0-flash")

def extract_keywords(message: str):
    prompt = f"""
    Extract 3–5 important keywords or phrases from the following report that might indicate its intent or suspicious content.

    Report:
    "{message}"

    Return as a clean Python list of strings.
    """
    try:
        response = model.generate_content(prompt)
        text = response.text.strip()
        # Use eval carefully here. Safer with ast.literal_eval.
        import ast
        keywords = ast.literal_eval(text)
        if isinstance(keywords, list):
            return [str(k).strip() for k in keywords]
        else:
            return []
    except Exception as e:
        print("Keyword extraction error:", e)
        return []
