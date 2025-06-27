from rest_framework import generics, permissions
from rest_framework.views import APIView

from .models import Report, AdminNote, AIClassificationLog

from .ai.classifier_gemini import classify_text_with_gemini
from .ai.keyword_extractor import extract_keywords
from .ai.summarizer import summarize_text
from .ai.image_classifier_gemini import classify_image_with_gemini

from .serializers import ReportSerializer, AdminNoteSerializer, AIClassificationLogSerializer

# Create your views here.

class ReportListCreateView(generics.ListCreateAPIView):
    queryset = Report.objects.all().order_by('-timestamp')
    serializer_class = ReportSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        message = serializer.validated_data['message']

        # Text AI Tasks
        category, reason, location, confidence = classify_text_with_gemini(message)
        keywords = extract_keywords(message)
        summary = summarize_text(message)

        report = serializer.save(
            reporter=self.request.user,
            category=category,
            classification_reason=reason,
            confidence=confidence,
            location_name=location,
            highlighted_keywords=keywords,
            short_summary=summary,
        )

        # Handle image
        image = self.request.FILES.get("image")
        if image:
            img_category, img_reason = classify_image_with_gemini(image)
            report.image = image
            report.image_category = img_category
            report.image_reason = img_reason
            report.save(update_fields=["image", "image_category", "image_reason"])

        # Log AI
        AIClassificationLog.objects.create(
            report=report,
            input_text=message,
            predicted_category=category,
            classification_reason=reason,
            confidence=confidence,
            model_version="gemini-2.0-flash"
        )




class ReportDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
    permission_classes = [permissions.IsAuthenticated]

class AdminNoteCreateView(generics.CreateAPIView):
    queryset = AdminNote.objects.all()
    serializer_class = AdminNoteSerializer
    permission_classes = [permissions.IsAdminUser]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class AdminNoteListView(generics.ListAPIView):
    queryset = AdminNote.objects.all().order_by('-created_at')
    serializer_class = AdminNoteSerializer
    permission_classes = [permissions.IsAuthenticated]

class AIClassificationLogListView(generics.ListAPIView):
    queryset = AIClassificationLog.objects.all().order_by('-timestamp')
    serializer_class = AIClassificationLogSerializer
    permission_classes = [permissions.IsAdminUser]


class ScamKnowledgeView(APIView):
    def get(self, request, category):
        knowledge_base = {
            "Fake Scholarship": "Fake scholarships often promise money but request payment or sensitive info. Always verify from official sites.",
            "Forged Result": "These documents may have layout issues, wrong fonts, or grammatical errors.",
            "Uncertain": "If you're unsure, cross-check with the issuing institution or contact EduGuard support.",
            # Add more categories
        }

        return Response({
            "category": category,
            "tip": knowledge_base.get(category, "No tip available for this category yet.")
        })