from django.db import models
from django.contrib.auth import get_user_model
from django.db.models import JSONField

# Create your models here.
User = get_user_model()

class Report(models.Model):
    REPORTER_TYPE_CHOICES = [
        ('student', 'Student'),
        ('teacher', 'Teacher'),
        ('anonymous', 'Anonymous'),
    ]

    reporter = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    reporter_type = models.CharField(max_length=20, choices=REPORTER_TYPE_CHOICES)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    short_summary = models.TextField(blank=True, null=True)

    # AI classification
    category = models.CharField(max_length=100, blank=True, null=True) 
    classification_reason = models.TextField(blank=True, null=True)
    confidence = models.FloatField(null=True, blank=True)
    
    highlighted_keywords = models.JSONField(blank=True, null=True, default=None)

    image = models.ImageField(upload_to='report_images/', null=True, blank=True)
    image_category = models.CharField(max_length=100, blank=True, null=True)
    image_reason = models.TextField(blank=True, null=True)

    is_reviewed = models.BooleanField(default=False)
    action_taken = models.TextField(blank=True, null=True)
    location_name = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"Report {self.id} - {self.category or 'Uncategorized'}"
    

class AdminNote(models.Model):
    report = models.ForeignKey(Report, on_delete=models.CASCADE, related_name='notes')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    note = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


class AIClassificationLog(models.Model):
    report = models.ForeignKey(Report, on_delete=models.CASCADE)
    input_text = models.TextField()
    predicted_category = models.CharField(max_length=100)
    classification_reason = models.TextField(blank=True, null=True)
    confidence = models.FloatField()
    model_version = models.CharField(max_length=50)
    timestamp = models.DateTimeField(auto_now_add=True)
