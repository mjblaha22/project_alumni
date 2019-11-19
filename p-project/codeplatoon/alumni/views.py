from .models import Users, Events, Messages, Businesses, Locations, Emails, Responses, User_Business
from .serializers import UsersSerializer, EventsSerializer, MessagesSerializer, BusinessesSerializer, LocationsSerializer, EmailsSerializer, ResponsesSerializer, User_BusinessSerializer
# from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
# from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
# from .serializers import UserSerializerWithToken


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

# @api_view(['GET'])
# def current_user(request):
#     serializer = UserSerializer(request.user)
#     return Response(serializer.data)

# class UserList(APIView):
#     """
#     Create a new user. It's called 'UserList' because normally we'd have a get
#     method here too, for retrieving a list of all User objects.
#     """
#     permission_classes = (permissions.AllowAny,)

#     def post(self, request, format=None):
#         serializer = UserSerializerWithToken(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)