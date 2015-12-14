# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import Student_Org_Site_Backend.api.validators


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_auto_20151208_0941'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='end',
            field=models.CharField(max_length=40, validators=[Student_Org_Site_Backend.api.validators.XSScheck]),
        ),
        migrations.AlterField(
            model_name='event',
            name='start',
            field=models.CharField(max_length=40, validators=[Student_Org_Site_Backend.api.validators.XSScheck]),
        ),
        migrations.AlterField(
            model_name='event',
            name='title',
            field=models.CharField(max_length=20, validators=[Student_Org_Site_Backend.api.validators.XSScheck]),
        ),
    ]
