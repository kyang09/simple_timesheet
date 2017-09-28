from django.contrib.auth.models import User, Group
from django.views import generic
from rest_framework import viewsets
from simple_timesheet.apps.core.serializers import UserSerializer, GroupSerializer
from models import Entry

class HomeView(generic.ListView):
    template_name = 'core/home.html'
    context_object_name = 'home_view'
    queryset = Entry.objects.all().order_by('time_from', 'time_to')
    def render(self, context, **kwargs):
        return super(HomeView, self).render(request, 'core/home.html')

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer