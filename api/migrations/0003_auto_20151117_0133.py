# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0002_auto_20151117_0058'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=40)),
                ('subtitle', models.CharField(max_length=40)),
                ('image', models.CharField(max_length=120, blank=True)),
                ('content', models.TextField()),
                ('datePublished', models.TextField()),
                ('author', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
                ('tags', models.ManyToManyField(to='api.Tag', blank=True)),
            ],
            options={
                'verbose_name_plural': 'Posts',
            },
        ),
        migrations.RemoveField(
            model_name='forumpost',
            name='author',
        ),
        migrations.RemoveField(
            model_name='forumpost',
            name='tags',
        ),
        migrations.DeleteModel(
            name='Forumpost',
        ),
    ]
