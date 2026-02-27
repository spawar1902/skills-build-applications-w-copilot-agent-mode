from django.db import models
from django.contrib.auth.models import AbstractUser

class Team(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, unique=True)

class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(unique=True)
    team = models.ForeignKey(Team, on_delete=models.CASCADE, null=True, blank=True)

class Activity(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.CharField(max_length=50)
    duration = models.IntegerField()  # duration in minutes

class Workout(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

class Leaderboard(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    points = models.IntegerField()
