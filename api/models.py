from django.db import models
from django.contrib.auth.models import User
from django.contrib import admin

# Create your models here.
class Tag(models.Model):
    """
    This is a tag for user submitted post entries.
    """
    name = models.CharField(max_length=20, blank=False, unique=True)
    def __str__(self):
        return str(self.id)+":"+self.name

    class Meta:
        verbose_name_plural = "Tags"

class TagAdmin(admin.ModelAdmin):
    list_display = ('name',)

class Post(models.Model):
    """
    This is a forum post for storing user submitted post entries.
    """
    title = models.CharField(max_length=40, blank=False)
    subtitle = models.CharField(max_length=40, blank=False)
    image = models.CharField(max_length=120, blank=True)
    content = models.TextField(blank=False)
    datePublished = models.TextField(blank=False)
    author = models.ForeignKey(User)
    tags = models.ManyToManyField('tag', blank=True)
    def __str__(self):
        return str(self.id) +":" +self.title
 		
    class Meta:
        #This will be used by the admin interface
        verbose_name_plural = "Posts"

class PostAdmin(admin.ModelAdmin):
    #This inner class indicates to the admin interface how to display a post
    #See the Django documentation for more information
    list_display = ('title', 'subtitle', 'image', 'content', 'datePublished', 'author')
