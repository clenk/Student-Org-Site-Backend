from rest_framework import serializers

#load django and webapp models
from django.contrib.auth.models import *
from Student_Org_Site_Backend.api.models import *

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id','title', 'subtitle', 'image', 'content', 'datePublished', 'author', 'tags', 'url')

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id','name', 'url')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'url')


