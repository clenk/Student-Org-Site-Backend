# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20151117_0243'),
    ]

    operations = [
        migrations.AlterField(
            model_name='myuser',
            name='profileImageUrl',
            field=models.CharField(max_length=120),
        ),
    ]
