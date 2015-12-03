# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('admin', '0001_initial'),
        ('api', '0008_auto_20151203_0023'),
    ]

    operations = [
        migrations.CreateModel(
            name='myUser',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('profileImageUrl', models.CharField(max_length=120)),
                ('posts', models.ManyToManyField(to='api.Post', blank=True)),
                ('user', models.OneToOneField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RemoveField(
            model_name='usr',
            name='posts',
        ),
        migrations.RemoveField(
            model_name='usr',
            name='user',
        ),
        migrations.DeleteModel(
            name='Usr',
        ),
    ]
