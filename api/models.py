from django.db import models
from django.contrib.auth.models import User
from django.contrib import admin
from Student_Org_Site_Backend.api.validators import *
from django.core.exceptions import ValidationError

# Create your models here.
class Tag(models.Model):
    """
    This is a tag for user submitted post entries.
    """
    name = models.CharField(max_length=20, blank=False, unique=True)
    posts = models.ManyToManyField('Post', blank=True)
    def __str__(self):
        return str(self.id)+":"+self.name

    class Meta:
        verbose_name_plural = "Tags"

class TagAdmin(admin.ModelAdmin):
    list_display = ('name',)

class Event(models.Model):
    """
    This is an event for the calendar.
    """
    title = models.CharField(max_length=20, blank=False, unique=True)
    start = models.CharField(max_length=20, blank=False, unique=True)
    end = models.CharField(max_length=20, blank=False, unique=True)
    #allday = models.BooleanField(unique=True)
    tags = models.ManyToManyField('tag', blank=True)
    def __str__(self):
        return str(self.id)+":"+self.name

    class Meta:
        verbose_name_plural = "Events"

class EventAdmin(admin.ModelAdmin):
    #This inner class indicates to the admin interface how to display a post
    #See the Django documentation for more information
    list_display = ('title', 'start', 'end',)

class myUser(User):
    '''name = models.CharField(max_length=20, blank=False, unique=True)
    emailAddress = models.CharField(max_length=120, blank=False, unique=True)'''
    profileImageUrl = models.CharField(max_length=120)
    posts = models.ManyToManyField('Post', blank=True)

class myUserAdmin(admin.ModelAdmin):
    list_display = ('username',)

class Post(models.Model):
    """
    This is a forum post for storing user submitted post entries.
    """
    title = models.CharField(max_length=40, blank=False)
    subtitle = models.CharField(max_length=40, blank=False)
    image = models.CharField(max_length=120, blank=True)
    content = models.TextField(blank=False, validators=[removeJavascriptKeyword])
    datePublished = models.TextField(blank=False)
    author = models.ForeignKey(User)
    tags = models.ManyToManyField('tag', blank=True)
    def __str__(self):
        return str(self.id) +":" +self.title

    """
    def clean(self):
        if 'shit' in (self.title + self.content):
            raise ValidationError('post contains profanity')
    """
    def clean(self):
        self.title = self.title.replace('shit','****')
        self.content = self.content.replace('shit','****')

    class Meta:
        #This will be used by the admin interface
        verbose_name_plural = "Posts"

class PostAdmin(admin.ModelAdmin):
    #This inner class indicates to the admin interface how to display a post
    #See the Django documentation for more information
    list_display = ('title', 'subtitle', 'image', 'content', 'datePublished', 'author')
