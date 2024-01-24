from django.urls import path
from . import views

urlpatterns = [
    path('', views.ski_resorts_view),
    path('all/', views.get_all_ski_resorts),
    path('add/', views.add_ski_resort),
    path('<int:pk>/', views.get_single_ski_resort),
    # path('weather/<int:pk>', views.get_ski_resort_weather),  # Add parameter for resort ID
    path('coordinates/<int:pk>/', views.get_resort_coordinates, name='get_resort_coordinates'),
]
