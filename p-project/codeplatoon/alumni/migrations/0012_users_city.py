# Generated by Django 2.2.7 on 2019-11-18 19:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alumni', '0011_auto_20191118_1940'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='city',
            field=models.CharField(default=None, max_length=200),
            preserve_default=False,
        ),
    ]
