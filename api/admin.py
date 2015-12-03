from django.contrib import admin
from Student_Org_Site_Backend.api.models import *

admin.site.register(Post, PostAdmin)
admin.site.register(Tag, TagAdmin)
admin.site.register(Event, EventAdmin)
#admin.site.register(myUser, myUserAdmin)
#admin.site.register(Usr, UsrAdmin)
admin.site.register(UserProfile, UserProfileAdmin)
