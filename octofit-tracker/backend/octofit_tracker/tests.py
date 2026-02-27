from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class ModelTests(TestCase):
    def setUp(self):
        self.team = Team.objects.create(name='Test Team')
        self.user = User.objects.create_user(username='testuser', email='test@example.com', team=self.team)
        self.workout = Workout.objects.create(name='Test Workout', description='Test Desc')
        self.activity = Activity.objects.create(user=self.user, type='run', duration=30)
        self.leaderboard = Leaderboard.objects.create(team=self.team, points=10)

    def test_team_creation(self):
        self.assertEqual(self.team.name, 'Test Team')

    def test_user_creation(self):
        self.assertEqual(self.user.email, 'test@example.com')
        self.assertEqual(self.user.team, self.team)

    def test_activity_creation(self):
        self.assertEqual(self.activity.type, 'run')
        self.assertEqual(self.activity.duration, 30)

    def test_workout_creation(self):
        self.assertEqual(self.workout.name, 'Test Workout')

    def test_leaderboard_creation(self):
        self.assertEqual(self.leaderboard.points, 10)
