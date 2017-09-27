from django.conf.urls import include, url
from django.contrib import admin

from simple_timesheet.apps.core import views as timesheet_core_views

urlpatterns = [    
    url(r'^$', timesheet_core_views.home, name='home'),
    url(r'^admin/', include(admin.site.urls)),
]
