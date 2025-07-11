# import google.generativeai as genai

# # Direct API key setup (for quick tests — use .env + decouple in prod)
# genai.configure(api_key="AIzaSyDswCoy-gttDalhM95DaDkJ9Sh14S80d7s")

# # List available models to debug NotFound error
# models = genai.list_models()
# print("Available models:")
# for m in models:
#     print(f"- {m.name} (methods: {m.supported_generation_methods})")

# # Try to use the correct model name — MUST start with "models/"
# model = genai.GenerativeModel(model_name="models/gemini-1.5-pro")

# # Generate response
# response = model.generate_content("Hello AI!")
# print(response.text.strip())


# import google.generativeai as genai

# genai.configure(api_key="AIzaSyDswCoy-gttDalhM95DaDkJ9Sh14S80d7s")

# model = genai.GenerativeModel(model_name="models/gemini-1.5-pro-latest")

# try:
#     response = model.generate_content("Hello AI!")
#     print(response.text.strip())
# except Exception as e:
#     print("Error during content generation:")
#     print(e)


import google.generativeai as genai

# Direct API key setup (for quick tests — use .env + decouple in prod)
genai.configure(api_key="AIzaSyBeA7tLrdnkWrXSNxqun697Jarr9-9prLM")

# Correct model name — MUST start with "models/"
model = genai.GenerativeModel(model_name="models/gemini-2.0-flash")

# Generate response
response = model.generate_content("Hello AI!")
print(response.text.strip())


import google.generativeai as genai

genai.configure(api_key="AIzaSyBeA7tLrdnkWrXSNxqun697Jarr9-9prLM")

model = genai.GenerativeModel(model_name="models/gemini-2.0-flash")

try:
    response = model.generate_content("Explain how AI works in a few words")
    print(response.text.strip())
except Exception as e:
    print("Error during content generation:")
    print(e)
