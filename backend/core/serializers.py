from rest_framework import serializers
from .models import Report, AdminNote, AIClassificationLog

import json


class ReportSerializer(serializers.ModelSerializer):
    reporter_username = serializers.CharField(source='reporter.username', read_only=True)
    highlighted_keywords = serializers.SerializerMethodField()

    def get_highlighted_keywords(self, obj):
        try:
            return json.loads(obj.highlighted_keywords) if obj.highlighted_keywords else []
        except Exception:
            return []

    class Meta:
        model = Report
        fields = '__all__'
        read_only_fields = [
            'reporter', 'timestamp', 'category', 'confidence'
        ]

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
