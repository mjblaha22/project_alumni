from .models import Users, Events, Messages, Businesses, Locations, Emails, Responses, User_Business
from .serializers import UsersSerializer, EventsSerializer, MessagesSerializer, BusinessesSerializer, LocationsSerializer, EmailsSerializer, ResponsesSerializer, User_BusinessSerializer
from rest_framework import viewsets
from django.contrib.auth.models import User

class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer

class EventsViewSet(viewsets.ModelViewSet):
    queryset = Events.objects.all()
    serializer_class = EventsSerializer

class MessagesViewSet(viewsets.ModelViewSet):
    queryset = Messages.objects.all()
    serializer_class = MessagesSerializer

class BusinessesViewSet(viewsets.ModelViewSet):
    queryset = Businesses.objects.all()
    serializer_class = BusinessesSerializer

class LocationsViewSet(viewsets.ModelViewSet):
    queryset = Locations.objects.all()
    serializer_class = LocationsSerializer

class EmailsViewSet(viewsets.ModelViewSet):
    queryset = Emails.objects.all()
    serializer_class = EmailsSerializer

class ResponsesViewSet(viewsets.ModelViewSet):
    queryset = Responses.objects.all()
    serializer_class = ResponsesSerializer

class User_BusinessViewSet(viewsets.ModelViewSet):
    queryset = User_Business.objects.all()
    serializer_class = User_BusinessSerializer
