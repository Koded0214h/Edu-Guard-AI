# Generated by Django 5.2.3 on 2025-06-29 17:38

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Report',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reporter_type', models.CharField(choices=[('student', 'Student'), ('teacher', 'Teacher'), ('anonymous', 'Anonymous')], max_length=20)),
                ('message', models.TextField()),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('short_summary', models.TextField(blank=True, null=True)),
                ('category', models.CharField(blank=True, max_length=100, null=True)),
                ('classification_reason', models.TextField(blank=True, null=True)),
                ('confidence', models.FloatField(blank=True, null=True)),
                ('highlighted_keywords', models.TextField(blank=True, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='report_images/')),
                ('image_category', models.CharField(blank=True, max_length=100, null=True)),
                ('image_reason', models.TextField(blank=True, null=True)),
                ('is_reviewed', models.BooleanField(default=False)),
                ('action_taken', models.TextField(blank=True, null=True)),
                ('location_name', models.CharField(blank=True, max_length=255, null=True)),
                ('reporter', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='AIClassificationLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('input_text', models.TextField()),
                ('predicted_category', models.CharField(max_length=100)),
                ('classification_reason', models.TextField(blank=True, null=True)),
                ('confidence', models.FloatField()),
                ('model_version', models.CharField(max_length=50)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('report', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.report')),
            ],
        ),
        migrations.CreateModel(
            name='AdminNote',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('note', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('report', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='notes', to='core.report')),
            ],
        ),
    ]
