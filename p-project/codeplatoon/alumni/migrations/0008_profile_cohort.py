# Generated by Django 2.2.7 on 2019-11-18 15:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alumni', '0007_auto_20191118_1555'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='cohort',
            field=models.CharField(default=None, max_length=200),
            preserve_default=False,
        ),
    ]
