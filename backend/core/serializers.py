from rest_framework import serializers
from .models import Report, AdminNote, AIClassificationLog

class ReportSerializer(serializers.ModelSerializer):
    reporter_username = serializers.CharField(source='reporter.username', read_only=True)

    class Meta:
        model = Report
        fields = '__all__'
        read_only_fields = ['reporter', 'timestamp', 'category', 'confidence', 'image_reason', 'image_category']

class AdminNoteSerializer(serializers.ModelSerializer):
    author_username = serializers.CharField(source='author.username', read_only=True)

    class Meta:
        model = AdminNote
        fields = '__all__'
        read_only_fields = ['author', 'created_at']

class AIClassificationLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = AIClassificationLog
        fields = '__all__'
        read_only_fields = ['timestamp']
