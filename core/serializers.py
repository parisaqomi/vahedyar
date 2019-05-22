from rest_framework import serializers
from core.models import University , Faculty

class UniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = (
            'name',
            'has_associates_degree',
            'has_bachelors_degree',
            'has_masters_degree',
            'has_doctorate_degree'
            )

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = (
            'name',
            'universiy'
            )