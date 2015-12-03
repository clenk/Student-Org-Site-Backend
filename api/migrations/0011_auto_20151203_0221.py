# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0010_auto_20151203_0132'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('profileImageUrl', models.CharField(max_length=120)),
                ('posts', models.ManyToManyField(to='api.Post', blank=True)),
                ('user', models.OneToOneField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RemoveField(
            model_name='usr',
            name='groups',
        ),
        migrations.RemoveField(
            model_name='usr',
            name='posts',
        ),
        migrations.RemoveField(
            model_name='usr',
            name='user_permissions',
        ),
        migrations.DeleteModel(
            name='Usr',
        ),
    ]
