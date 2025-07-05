from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import Report, AdminNote, AIClassificationLog

from .ai.classifier_gemini import classify_text_with_gemini
from .ai.keyword_extractor import extract_keywords
from .ai.summarizer import summarize_text
from .ai.image_classifier_gemini import classify_image_with_gemini

from .serializers import ReportSerializer, AdminNoteSerializer, AIClassificationLogSerializer

from django.contrib.auth.models import User
from django.contrib.auth import authenticate

import json

# Create your views here.

@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    if not username or not password:
        return Response({'error': 'Username and password are required.'}, status=400)

    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists.'}, status=400)

    user = User.objects.create_user(username=username, email=email, password=password)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key, 'username': user.username})

@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)

    if user is not None:
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'username': user.username})
    else:
        return Response({'error': 'Invalid credentials'}, status=400)

class ReportListCreateView(generics.ListCreateAPIView):
    queryset = Report.objects.all().order_by('-timestamp')
    serializer_class = ReportSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Report.objects.filter(reporter=self.request.user).order_by('-timestamp')

    def perform_create(self, serializer):
        message = serializer.validated_data['message']

        # Text AI Tasks
        try:
            category, reason, location, confidence = classify_text_with_gemini(message)
        except Exception as e:
            print("Text classification error:", e)
            category, reason, location, confidence = None, None, None, None

        # Keywords extraction
        try:
            keywords = extract_keywords(message)
        except Exception as e:
            print("Keyword extraction error:", e)
            keywords = []

        # Summary
        try:
            summary = summarize_text(message)
        except Exception as e:
            print("Summarization error:", e)
            summary = None

        # Ensure keywords is list
        if not isinstance(keywords, list):
            print("Invalid keywords, resetting to empty list")
            keywords = []

        # Save Report
        report = serializer.save(
            reporter=self.request.user,
            category=category,
            classification_reason=reason,
            confidence=confidence,
            location_name=location,
            highlighted_keywords=json.dumps(keywords),
            short_summary=summary,
        )

        # Image AI Tasks
        image = self.request.FILES.get('image')
        if image:
            img_cat, img_reason = classify_image_with_gemini(image)
            report.image = image
            report.image_category = img_cat
            report.image_reason = img_reason
            report.save(update_fields=['image', 'image_category', 'image_reason'])

        # Log AI classification
        try:
            AIClassificationLog.objects.create(
                report=report,
                input_text=message,
                predicted_category=category,
                classification_reason=reason,
                confidence=confidence,
                model_version="gemini-2.0-flash"
            )
        except Exception as e:
            print("AIClassificationLog error:", e)


class ReportSummaryView(APIView):
    def get(self, request, pk):
        try:
            report = Report.objects.get(pk=pk)
            return Response({
                "category": report.category,
                "summary": report.short_summary,
                "reason": report.classification_reason,
                "confidence": report.confidence,
                "location": report.location_name,
                "keywords": json.loads(report.highlighted_keywords or '[]'),
                "timestamp": report.timestamp.isoformat(),
            })
        except Report.DoesNotExist:
            return Response({"error": "Not found"}, status=404)


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

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_stats(request):
    user = request.user
    user_reports = Report.objects.filter(reporter=user)
    scans_completed = user_reports.count()
    potential_scams = user_reports.filter(category__icontains="scam").count()
    documents_checked = user_reports.exclude(image="").exclude(image=None).count()
    scams_reported = user_reports.filter(category__icontains="scam").count()
    return Response({
        "scans_completed": scans_completed,
        "potential_scams": potential_scams,
        "documents_checked": documents_checked,
        "scams_reported": scams_reported,
    })