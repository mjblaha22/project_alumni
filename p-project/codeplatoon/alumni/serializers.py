from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from .models import Users, Events, Messages, Businesses, Locations, Emails, Responses, User_Business
# from django.contrib.auth.models import User

class UsersSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Users
        fields = ['user_name', 'first_name', 'last_name', 'password', 'email', 'cohort', 'business_name', 'street_address', 'city', 'state', 'zipcode', 'profile_image']

class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = ['user_id', 'event_place', 'event_discription', 'date_start', 'time_start', 'street_address', 'city', 'state', 'zipcode']

class MessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = ['user_id', 'message']

class BusinessesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Businesses
        fields = ['user_id', 'business_name', 'street_address', 'state', 'zipcode'] 

class EmailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emails
        fields = ['user_id', 'email']

class ResponsesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Responses
        fields = ['user_id', 'message_id', 'response']

class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Responses
        fields = ['user_id', 'business_id', 'review']

class User_BusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_Business
        fields = ['user_id', 'business_id']

class LocationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Locations
        fields = ['business_id', 'event_id']

# class UserSerializer(serializers.ModelSerializer):
    
#     class Meta:
#         model = User
#         fields = ['username', 'first_name', 'last_name', 'email', 'password']

# class UserSerializerWithToken(serializers.ModelSerializer):

#     token = serializers.SerializerMethodField()
#     password = serializers.CharField(write_only=True)

#     def get_token(self, obj):
#         jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
#         jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

#         payload = jwt_payload_handler(obj)
#         token = jwt_encode_handler(payload)
#         return token

#     def create(self, validated_data):
#         password = validated_data.pop('password', None)
#         instance = self.Meta.model(**validated_data)
#         if password is not None:
#             instance.set_password(password)
#         instance.save()
#         return instance

#     class Meta:
#         model = User
#         fields = ('token', 'username', 'password')
