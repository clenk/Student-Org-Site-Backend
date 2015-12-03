from django.shortcuts import *


# Import models
from django.db import models
from django.contrib.auth.models import *
from Student_Org_Site_Backend.api.models import *

#REST API
from rest_framework import viewsets
from Student_Org_Site_Backend.api.serializers import *
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth import authenticate, login, logout
from rest_framework.permissions import *

class Session(APIView):
    permission_classes = (AllowAny,)
    def form_response(self, isauthenticated, userid, username, error=""):
        data = {
            'isauthenticated': isauthenticated,
            'userid': userid,
            'username': username
        }
        if error:
            data['message'] = error

        return Response(data)

    def get(self, request, *args, **kwargs):
        # Get the current user
        if request.user.is_authenticated():
            return self.form_response(True, request.user.id, request.user.username)
        return self.form_response(False, None, None)

    def post(self, request, *args, **kwargs):
        # Login
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return self.form_response(True, user.id, user.username)
            return self.form_response(False, None, None, "Account is suspended")
        return self.form_response(False, None, None, "Invalid username or password")

    def delete(self, request, *args, **kwargs):
        # Logout
        logout(request)
        return Response(status=status.HTTP_204_NO_CONTENT)

#needed if you want to use all class-based views, replace foo and bar with respective names (e.g. forumposts-list)
# class APIRoot(APIView):
#     def get(self, request):
#         # Assuming we have views named 'foo-view' and 'bar-view'
#         # in our project's URLconf.
#         return Response({
#             'foo': reverse('foo-view', request=request),
#             'bar': reverse('bar-view', request=request)
#         })

#Viewset forum post example
# class ForumpostViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows for CRUD operations on forumpost objects.
#     """
#     queryset = Forumpost.objects.all()
#     serializer_class = ForumpostSerializer


#more detailed, but more control class based view example
class PostList(APIView):
    """
    List all forum posts, or create a new post.
    """
    def get(self, request, format=None):
        posts = Post.objects.all() #you could limit this to only the posts for which the user has access
        serializer = PostSerializer(posts, many=True, context={'request': request})
        return Response(serializer.data) #you can customize the response here
    
    def post(self, request, format=None):
        serializer = PostSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED) #you could customize the response here
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) #you could customize the error message here

class PostDetail(APIView):
    """
    Retrieve, update or delete a single forum post.
    """
    def get_object(self, pk):
        try:
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        post = self.get_object(pk)
        serializer = PostSerializer(post, context={'request': request})
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        post = self.get_object(pk)
        serializer = PostSerializer(post, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        post = self.get_object(pk)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class TagViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows for CRUD operations on tag objects.
    """
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    lookup_field = 'name'

class EventViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows for CRUD operations on event objects.
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'username'

class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows for CRUD operations on post objects.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer

def home(request):
  """
  Send requests to / to the ember.js clientside app  """

  return render_to_response('index.html',
                {}, RequestContext(request))
