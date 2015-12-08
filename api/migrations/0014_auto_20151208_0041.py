# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import Student_Org_Site_Backend.api.validators


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_auto_20151207_2124'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='end',
            field=models.CharField(unique=True, max_length=40, validators=[Student_Org_Site_Backend.api.validators.XSScheck, Student_Org_Site_Backend.api.validators.isDateFormat]),
        ),
        migrations.AlterField(
            model_name='event',
            name='start',
            field=models.CharField(unique=True, max_length=40, validators=[Student_Org_Site_Backend.api.validators.XSScheck, Student_Org_Site_Backend.api.validators.isDateFormat]),
        ),
        migrations.AlterField(
            model_name='event',
            name='title',
            field=models.CharField(unique=True, max_length=20, validators=[Student_Org_Site_Backend.api.validators.XSScheck]),
        ),
        migrations.AlterField(
            model_name='post',
            name='datePublished',
            field=models.TextField(validators=[Student_Org_Site_Backend.api.validators.XSScheck, Student_Org_Site_Backend.api.validators.isDateFormat]),
        ),
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.CharField(blank=True, max_length=120, validators=[Student_Org_Site_Backend.api.validators.isImg]),
        ),
        migrations.AlterField(
            model_name='post',
            name='subtitle',
            field=models.CharField(max_length=40, validators=[Student_Org_Site_Backend.api.validators.XSScheck]),
        ),
        migrations.AlterField(
            model_name='post',
            name='title',
            field=models.CharField(max_length=40, validators=[Student_Org_Site_Backend.api.validators.XSScheck]),
        ),
        migrations.AlterField(
            model_name='tag',
            name='name',
            field=models.CharField(unique=True, max_length=20, validators=[Student_Org_Site_Backend.api.validators.XSScheck]),
        ),
    ]
