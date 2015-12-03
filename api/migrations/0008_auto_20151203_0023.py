# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings
import django.contrib.auth.models


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0006_require_contenttypes_0002'),
        ('admin', '0001_initial'),
        ('api', '0007_auto_20151124_0105'),
    ]

    operations = [
        migrations.CreateModel(
            name='Usr',
            fields=[
                ('user', models.OneToOneField(primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('profileImageUrl', models.CharField(max_length=120)),
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
        migrations.RemoveField(
            model_name='myuser',
            name='posts',
        ),
        migrations.RemoveField(
            model_name='myuser',
            name='user_ptr',
        ),
        migrations.DeleteModel(
            name='myUser',
        ),
    ]
