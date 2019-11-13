from django.urls import path, include
from .views import EventsViewSet, UsersViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', EventsViewSet, basename='Events')
router.register('user', UsersViewSet, basename='Users')
urlpatterns = router.urls