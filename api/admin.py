from django.contrib import admin
from Student_Org_Site_Backend.api.models import *

admin.site.register(Post, PostAdmin)
admin.site.register(Tag, TagAdmin)
