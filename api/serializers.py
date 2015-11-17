from rest_framework import serializers

#load django and webapp models
from django.contrib.auth.models import *
from Student_Org_Site_Backend.api.models import *

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id','name', 'url')

class myUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = myUser
        fields = ('id', 'name', 'password', 'emailAddress', 'profileImageUrl', 'posts')

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id','title', 'subtitle', 'image', 'content', 'datePublished', 'author', 'tags', 'url')

