# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_event'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='myuser',
            name='emailAddress',
        ),
        migrations.RemoveField(
            model_name='myuser',
            name='name',
        ),
    ]
