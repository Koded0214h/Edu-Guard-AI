import google.generativeai as genai
from decouple import config
import json
import re

genai.configure(api_key=config("GEMINI_API_KEY"))
model = genai.GenerativeModel(model_name="models/gemini-2.0-flash")

def extract_keywords(message: str):
    prompt = f"""
    Extract 3–5 important keywords or phrases from the following report that might indicate its intent or suspicious content.

    Report:
    "{message}"

    Return ONLY a JSON array of strings, e.g. ["keyword1", "keyword2", "keyword3"]. Do not include any explanation, code block, or variable assignment—just the JSON array.
    """
    try:
        response = model.generate_content(prompt)
        raw_text = response.text.strip()
        print("Gemini keyword response (raw):", raw_text)

        # Remove code block if present
        cleaned = re.sub(r"^```(?:json)?", "", raw_text).strip()
        cleaned = re.sub(r"```$", "", cleaned).strip()

        try:
            parsed = json.loads(cleaned)
            if isinstance(parsed, list):
                return [str(k).strip() for k in parsed]
        except Exception as e:
            print("Parsing failed:", e)
            # Fallback: extract quoted words/phrases as keywords
            fallback = re.findall(r'"([^"]+)"', cleaned)
            if fallback:
                return fallback

        return []
    except Exception as e:
        print("Keyword extraction error:", e)
        return []
