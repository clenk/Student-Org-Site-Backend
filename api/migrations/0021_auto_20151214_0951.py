# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0020_orgvals'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Orgvals',
            new_name='Orgval',
        ),
    ]
