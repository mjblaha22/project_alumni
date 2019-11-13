from rest_framework import serializers
from .models import Users, Events, Messages, Businesses, Locations, Emails, Responses, User_Business
from django.contrib.auth.models import User

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['user_namer', 'first_name', 'last_name', 'password']

class EventsSerializer(serializers.ModelSerializer):
    games = serializers.StringRelatedField(many=True)
    class Meta:
        model = Events
        fields = ['event_name', 'date_start', 'time_start', 'street_address', 'state', 'zipcode']

class MessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = ['user_id', 'response_id', 'message']

class BusinessesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Businesses
        fields = ['user_id', 'review_id', 'business_name']

class LocationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Locations
        fields = ['business_id', 'event_id']

class EmailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emails
        fields = ['user_id', 'email']

class ResponsesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Responses
        fields = ['user_id', 'message_id']

class User_BusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_Business
        fields = ['user_id', 'business_id']