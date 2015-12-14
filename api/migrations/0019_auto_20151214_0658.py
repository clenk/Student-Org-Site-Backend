# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0018_admindata'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='admindata',
            options={'verbose_name_plural': 'Admindatas'},
        ),
    ]
