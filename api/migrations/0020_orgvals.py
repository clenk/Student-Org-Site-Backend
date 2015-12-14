# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import Student_Org_Site_Backend.api.validators


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0019_auto_20151214_0658'),
    ]

    operations = [
        migrations.CreateModel(
            name='Orgvals',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('staticname', models.CharField(unique=True, max_length=30, validators=[Student_Org_Site_Backend.api.validators.XSScheck])),
                ('staticval', models.TextField(validators=[Student_Org_Site_Backend.api.validators.XSScheck])),
            ],
            options={
                'verbose_name_plural': 'Orgvals',
            },
        ),
    ]
