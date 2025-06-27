from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from .views import (
    ReportListCreateView, ReportDetailView,
    AdminNoteCreateView, AdminNoteListView,
    AIClassificationLogListView, ScamKnowledgeView
)

urlpatterns = [
    path('reports/', ReportListCreateView.as_view(), name='report-list-create'),
    path('reports/<int:pk>/', ReportDetailView.as_view(), name='report-detail'),
    path('notes/', AdminNoteListView.as_view(), name='note-list'),
    path('notes/create/', AdminNoteCreateView.as_view(), name='note-create'),
    path('ai/logs/', AIClassificationLogListView.as_view(), name='ai-log-list'),
    path("scam-tactics/<str:category>/", ScamKnowledgeView.as_view()),
]



urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)