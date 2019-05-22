from rest_framework.viewsets import ModelViewSet
from core.models import University, Faculty
from core.serializers import UniversitySerializer , FacultySerializer


class UniversityViewSet(ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = University.objects.all().order_by('-date_joined')
    serializer_class = UniversitySerializer


class FacultyViewSet(ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer