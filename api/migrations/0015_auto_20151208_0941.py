# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_auto_20151208_0041'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='datePublished',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
