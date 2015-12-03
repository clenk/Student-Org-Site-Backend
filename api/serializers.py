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
        fields = ('id','name', )

class UserSerializer(serializers.ModelSerializer):
    #name = serializers.username #TODO change the field name 'username' to 'name'
    class Meta:
        model = myUser
        #fields = ('id', 'username', 'password', 'email', 'profileImageUrl', 'posts')
        fields = ('id', 'username', 'password', 'email',)

class PostSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(slug_field='username', queryset=User.objects.all())

    tags = serializers.SlugRelatedField(slug_field='name', many=True, queryset=Tag.objects.all())
    class Meta:
        model = Post
        fields = ('id','title', 'subtitle', 'image', 'content', 'datePublished', 'author', 'tags', 'url')
    def validate_content(self, value):
        """
        Check that the content field doesn't contain the keyword javascript'
        """
        if "teststr" in value:
            raise serializers.ValidationError("String %s contains invalid 'teststr' string" % value)
        return value

    """
    def validate(self, data):
        if 'shit' in (data['title'] + data['content']):
            raise serializers.ValidationError('This post contains profanity')
        return data
    """

    def validate(self, data):
        data['title'] = data['title'].replace('shit','****')
        data['content'] = data['content'].replace('shit','****')
        return data
    
    def validate_author(self, value):
        if not self.context['request'].user == value:
            raise serializers.ValidationError('You cannot create a post as another user')





