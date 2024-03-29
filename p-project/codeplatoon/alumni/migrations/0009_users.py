# Generated by Django 2.2.7 on 2019-11-18 19:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alumni', '0008_profile_cohort'),
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=200)),
                ('lastName', models.CharField(max_length=200)),
                ('email', models.CharField(max_length=200)),
                ('businessName', models.CharField(max_length=200)),
                ('streetAddress', models.CharField(max_length=200)),
                ('state', models.CharField(max_length=200)),
                ('zipcode', models.CharField(max_length=200)),
            ],
        ),
    ]
