from classifier_gemini import classify_text_with_gemini

msg = "Congratulations! You've won a free scholarship. Click here to claim it now."
cls, reason = classify_text_with_gemini(msg)
print(f"Classification: {cls}\nReason: {reason}")