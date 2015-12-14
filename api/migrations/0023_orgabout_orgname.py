# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import Student_Org_Site_Backend.api.validators


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0022_auto_20151214_1010'),
    ]

    operations = [
        migrations.CreateModel(
            name='Orgabout',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('about', models.TextField(validators=[Student_Org_Site_Backend.api.validators.XSScheck])),
            ],
            options={
                'verbose_name_plural': 'Orgabouts',
            },
        ),
        migrations.CreateModel(
            name='Orgname',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(unique=True, max_length=30, validators=[Student_Org_Site_Backend.api.validators.XSScheck])),
            ],
            options={
                'verbose_name_plural': 'Orgnames',
            },
        ),
    ]
