# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import Student_Org_Site_Backend.api.validators


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20151124_0105'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='content',
            field=models.TextField(validators=[Student_Org_Site_Backend.api.validators.XSScheck]),
        ),
    ]
