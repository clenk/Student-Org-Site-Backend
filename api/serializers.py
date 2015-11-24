from rest_framework import serializers

#load django and webapp models
from django.contrib.auth.models import *
from Student_Org_Site_Backend.api.models import *

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id','title', 'start', 'end', 'allday', 'tags')

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id','name', 'url')

class UserSerializer(serializers.ModelSerializer):
    #name = serializers.username #TODO change the field name 'username' to 'name'
    class Meta:
        model = myUser
        #fields = ('id', 'username', 'password', 'email', 'profileImageUrl', 'posts')
        fields = ('id', 'username', 'password', 'email',)

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id','title', 'subtitle', 'image', 'content', 'datePublished', 'author', 'tags', 'url')

