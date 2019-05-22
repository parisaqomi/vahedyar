from rest_framework import serializers
from core.models import University , Faculty ,Chart ,Study ,Scores ,Course

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

class ChartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chart
        fields = (
            'title',
            'is_active',
            'degree',
            'acceptance_date',
            'course',
            'faculty'
            )

class Studyserializer(serializers.ModelSerializer):
    class Meta:
        model = Study
        fields =(
            'degree',
            'entrance_year',
            'student'
        )

class Scoresserializer(serializers.ModelSerializer):
    class Meta:
        model = Scores
        fields =(
            'Scores',
            'study'
        )

class Courseserializer(serializers.ModelSerializer):
    class Meta:
        Model = Course
        fields = (
            'title',
            'course_type',
            'vahed_nazari',
            'vahed_amali',
            'corequisite_courses'
        )