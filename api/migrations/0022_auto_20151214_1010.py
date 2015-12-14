# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0021_auto_20151214_0951'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Admindata',
        ),
        migrations.DeleteModel(
            name='StaticContent',
        ),
    ]
