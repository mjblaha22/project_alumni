# Generated by Django 2.2.7 on 2019-11-14 19:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('alumni', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='events',
            name='user_id',
        ),
        migrations.AddField(
            model_name='events',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='events', to='alumni.Users'),
        ),
    ]
