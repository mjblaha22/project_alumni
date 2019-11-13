from django.urls import path, include
from .views import GameViewSet, UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', GameViewSet, basename='login')
router.register('user', UserViewSet, basename='user')
urlpatterns = router.urls