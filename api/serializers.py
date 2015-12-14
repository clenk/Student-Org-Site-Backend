from rest_framework import serializers

#load django and webapp models
from django.contrib.auth.models import *
try:
    from localsettings import *
except ImportError:
    from Student_Org_Site_Backend.localsettings import *
if IS_PROD:
    from api.models import *
else:
    from Student_Org_Site_Backend.api.models import *
from django.utils import formats

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id','title', 'start', 'end', 'tags')

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id','name', )

class OrgnameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orgname
        fields = ('id', 'name')

class OrgaboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orgabout
        fields = ('id', 'about')

# class UserSerializer(serializers.ModelSerializer):
#     #name = serializers.username #TODO change the field name 'username' to 'name'
#     profileImageUrl = serializers.CharField(source='myuser.profileImageUrl')
#     # posts = serializers.Field(source='myuser.posts')
#     class Meta:
#         #model = myUser
#         model = User
#         fields = ('id', 'username', 'password', 'email', 'profileImageUrl', 'posts')
#         #fields = ('id', 'username', 'password', 'email',)

# class UsrSerializer(serializers.ModelSerializer):
#     username = serializers.CharField(source='user.username')
#     email = serializers.CharField(source='user.email')
#     password = serializers.CharField(source='user.password')
#     class Meta:
#         model = Usr
#         fields = ('id', 'username', 'password', 'email', 'profileImageUrl', 'posts')

#     def restore_object(self, attrs, instance=None):
#         """
#         Given a dictionary of deserialized field values, either update
#         an existing model instance, or create a new model instance.
#         """
#         if instance is not None:
#             instance.user.username = attrs.get('user.username', instance.user.username)
#             instance.user.email = attrs.get('user.email', instance.user.email)
#             instance.user.password = attrs.get('user.password', instance.user.password)
#             instance.user.profileImageUrl = attrs.get('user.profileImageUrl', instance.user.profileImageUrl)
#             instance.user.posts = attrs.get('user.posts', instance.user.posts)
#             return instance

#         user = User.objects.create_user(username=attrs.get('user.username'), email= attrs.get('user.email'), password=attrs.get('user.password'))
#         return Usr(user=user)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email',)

class UserProfileSerializer(serializers.ModelSerializer):
    # profileImageUrl = serializers.CharField(source='myuser.profileImageUrl')
    # posts = serializers.Field(source='myuser.posts')
    class Meta:
        model = UserProfile
        fields = ('id', 'user', 'profileImageUrl', 'posts')

class PostSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(slug_field='username', queryset=User.objects.all())
    tags = serializers.SlugRelatedField(slug_field='name', many=True, queryset=Tag.objects.all())

    class Meta:
        model = Post
        fields = ('id','title', 'subtitle', 'image', 'content', 'datePublished', 'author', 'tags')

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





