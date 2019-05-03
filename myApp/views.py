from django.shortcuts import render

# Create your views here.

def home (request):
    if request.method == 'GET' : 
        render(request , 'index.html')