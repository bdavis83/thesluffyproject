from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from .models import SkiResort
from .serializer import SkiResortSerializer
from .utils import get_weather_data

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def ski_resorts_view(request):
    if request.method == 'GET':
        return get_all_ski_resorts(request)
    elif request.method == 'POST':
        return add_ski_resort(request)

@api_view(['GET'])
def get_all_ski_resorts(request):
    ski_resorts = SkiResort.objects.all()
    serialized_data = []

    for resort in ski_resorts:
        weather_data = resort.get_weather()
        serializer = SkiResortSerializer(resort)
        data = serializer.data
        data['weather_data'] = weather_data
        serialized_data.append(data)

    return Response(serialized_data)

@api_view(['POST'])
def add_ski_resort(request):
    if request.method == 'POST':
        serializer = SkiResortSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
