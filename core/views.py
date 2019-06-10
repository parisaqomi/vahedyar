from rest_framework.viewsets import ModelViewSet
from core.models import University, Faculty , Chart, Study , Scores , Course
from core.serializers import UniversitySerializer , Courseserializer ,Scoresserializer , Studyserializer, FacultySerializer ,ChartSerializer


class UniversityViewSet(ModelViewSet):
    queryset = University.objects.all().order_by()
    serializer_class = UniversitySerializer


class FacultyViewSet(ModelViewSet):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer


class ChartViewSet(ModelViewSet):
    queryset = Chart.objects.all()
    serializer_class = ChartSerializer

class StudyViewSet(ModelViewSet):
        queryset = Study.objects.all()
        serializer_class = Studyserializer

class ScoresViewSet(ModelViewSet):
        queryset = Scores.objects.all()
        serializer_class = Scoresserializer

class CourseViewSet(ModelViewSet):
        queryset = Course.objects.all()
        serializer_class = Courseserializer