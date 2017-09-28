from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers

from simple_timesheet.apps.core import views as timesheet_core_views

router = routers.DefaultRouter()
router.register(r'user', timesheet_core_views.UserViewSet)
router.register(r'groups', timesheet_core_views.GroupViewSet)

urlpatterns = [    
    url(r'^$', timesheet_core_views.HomeView.as_view(), name='home'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
