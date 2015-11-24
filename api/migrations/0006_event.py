# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20151117_0303'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(unique=True, max_length=20)),
                ('start', models.CharField(unique=True, max_length=20)),
                ('end', models.CharField(unique=True, max_length=20)),
                ('tags', models.ManyToManyField(to='api.Tag', blank=True)),
            ],
            options={
                'verbose_name_plural': 'Events',
            },
        ),
    ]
