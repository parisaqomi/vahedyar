"""vahedyar URL Configuration
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from core import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'faculties', views.FacultyViewSet)
router.register(r'universities', views.UniversityViewSet)
router.register(r'charts', views.ChartViewSet)
router.register(r'studies', views.StudyViewSet)
router.register(r'scores', views.ScoresViewSet)
router.register(r'courses', views.CourseViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
]
