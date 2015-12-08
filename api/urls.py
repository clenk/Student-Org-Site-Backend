from django.conf.urls import include, url

#Django Rest Framework
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns
from localsettings import *
print IS_PROD
if IS_PROD:
    from api import views
else:
	from Student_Org_Site_Backend.api import views

#REST API routes
router = routers.DefaultRouter()
#router.register(r'posts', views.PostViewSet) #use this for viewset approach
router.register(r'tags', views.TagViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'posts', views.PostViewSet)
router.register(r'events', views.EventViewSet)
router.register(r'userprofiles', views.UserProfileViewSet)

#REST API
urlpatterns = [
    url(r'^', include(router.urls)),

    #class-based view approach
    #url(r'^$', views.api_root), #needed if you use all class-based views and want them to show up in the landing page for the browsable api
    url(r'^posts/$', views.PostList.as_view(), name='post-list'),
    url(r'^posts/(?P<pk>[0-9]+)/$', views.PostDetail.as_view(), name='post-detail'),
    url(r'^session/', views.Session.as_view()),
]
