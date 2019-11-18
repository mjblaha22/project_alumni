from django.conf import settings
from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    cohort = models.CharField(max_length=200)
    current_employer = models.CharField(max_length=200)
    emp_address = models.CharField(max_length=200)
    emp_state = models.CharField(max_length=2)
    emp_zipcode = models.CharField(max_length=5)
    # user_name = models.CharField(max_length=200)
    # first_name = models.CharField(max_length=200)
    # last_name = models.CharField(max_length=200)
    # password = models.CharField(max_length=200)

    def __str__(self):
        return f"id={self.id}, current_employer={self.current_employer}, emp_address={self.emp_address}, emp_state={self.emp_state}, emp_zipcode={self.emp_zipcode}"


class Events(models.Model):
    user_id = models.ForeignKey(User, null=True, on_delete=models.CASCADE, related_name='events')
    event_name = models.CharField(max_length=200)
    date_start = models.CharField(max_length=200)
    time_start = models.CharField(max_length=200)
    street_address = models.CharField(max_length=200)
    state = models.CharField(max_length=2)
    zipcode = models.TextField(max_length=5)

    def __str__(self):
        return f"id={self.id}, user_id={self.user_id}, event_name={self.event_name}, date_start={self.date_start}, time_start={self.time_start}, street_address={self.street_address}, state={self.state}, zipcode={self.zipcode}"

class Messages(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='messages')
    message = models.CharField(max_length=1000)

    def __str__(self):
        return f"id={self.id}, user_id={self.user_id}, message={self.message}"

class Businesses(models.Model):
    user_id = models.ForeignKey(User, null=True, on_delete=models.CASCADE, related_name='businesses')
    business_name = models.CharField(max_length=200)
    street_address = models.CharField(max_length=200)
    state = models.CharField(max_length=2)
    zipcode = models.TextField(max_length=5)

    # review_id = models.ForeignKey(Users, null=True, on_delete=models.CASCADE, related_name='review')

    def __str__(self):
        return f"id={self.id}, user_id={self.user_id}, review_id={self.review_id}, business_name={self.business_name}"

class Locations(models.Model):
    business_id = models.ForeignKey(Businesses, null=True, on_delete=models.CASCADE, related_name='locations')
    event_id = models.ForeignKey(Events, null=True, on_delete=models.CASCADE, related_name='eventlocations')

    def __str__(self):
        return f"id={self.id}, business_id={self.business_id}, event_id={self.event_id}"

class Emails(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='emails')
    email = models.CharField(max_length=200)

    def __str__(self):
        return f"id={self.id}, email={self.email}"

class Responses(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='userresponse')
    message_id = models.ForeignKey(Messages, null=True, on_delete=models.CASCADE, related_name='messageresponse')
    response = models.CharField(max_length=1000)

    def __str__(self):
        return f"id={self.id}, user_id={self.user_id}, message_id={self.message_id}"
    
class User_Business(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='userbusiness')
    business_id = models.ForeignKey(Businesses, on_delete=models.CASCADE, related_name='businessuser')

    def __str__(self):
        return f"id={self.id}, user_id={self.user_id}, business_id={self.business_id}"

class Reviews(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='userreview')
    business_id = models.ForeignKey(Businesses, on_delete=models.CASCADE, related_name='busireview')
    review = models.CharField(max_length=1000)

    