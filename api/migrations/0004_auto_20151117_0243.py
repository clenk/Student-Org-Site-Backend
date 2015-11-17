# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings
import django.contrib.auth.models


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0006_require_contenttypes_0002'),
        ('api', '0003_auto_20151117_0133'),
    ]

    operations = [
        migrations.CreateModel(
            name='myUser',
            fields=[
                ('user_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('name', models.CharField(unique=True, max_length=20)),
                ('emailAddress', models.CharField(unique=True, max_length=120)),
                ('profileImageUrl', models.CharField(unique=True, max_length=120)),
                ('posts', models.ManyToManyField(to='api.Post', blank=True)),
            ],
            options={
                'abstract': False,
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
            },
            bases=('auth.user',),
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.AddField(
            model_name='tag',
            name='posts',
            field=models.ManyToManyField(to='api.Post', blank=True),
        ),
    ]
