from django.conf import settings
from django.db import models
# from django.contrib.auth.models import User

class Users(models.Model):
    user_name = models.CharField(max_length=200)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    password = models.CharField(max_length=200)

class Events(models.Model):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='events')
    event_name = models.CharField(max_length=200)
    date_start = models.CharField(max_length=200)
    time_start = models.CharField(max_length=200)
    street_address = models.CharField(max_length=200)
    state = models.CharField(max_length=2)
    zipcode = models.TextField(max_length=5)

class Messages(models.Model):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='messages')
    response_id = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='responses')
    message = models.CharField(max_length=1000)

class Businesses(models.Model):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='businesses')
    review_id = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='review')
    business_name = models.CharField(max_length=200)

class Locations(models.Model):
    business_id = models.ForeignKey(Businesses, on_delete=models.CASCADE, related_name='locations')
    event_id = models.ForeignKey(Events, on_delete=models.CASCADE, related_name='eventlocations')

class Emails(models.Model):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='emails')
    email = models.CharField(max_length=200)

class Responses(models.Model):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='userresponse')
    message_id = models.ForeignKey(Messages, on_delete=models.CASCADE, related_name='messageresponse')
    
class User_Business(models.Model):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='userbusiness')
    business_id = models.ForeignKey(Businesses, on_delete=models.CASCADE, related_name='businessuser')   
    # def __str__(self):
    #     return str(self.did_win)