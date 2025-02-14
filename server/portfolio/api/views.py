from django.shortcuts import render # type: ignore
from rest_framework.decorators import api_view # type: ignore
from rest_framework.response import Response # type: ignore
from .models import Project, Contact, Insight
from .serializers import ProjectSerializer, ContactSerializer, InsightSerializer


# Create your views here.
@api_view(['GET'])
def projects(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True).data
    return Response(serializer)

@api_view(['GET'])
def blogs(request):
    blogs = Insight.objects.all()
    serializer = InsightSerializer(blogs, many=True).data
    return Response(serializer)

@api_view(['POST'])
def contact(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
