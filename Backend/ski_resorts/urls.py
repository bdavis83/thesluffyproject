from django.urls import path, include
from . import views

urlpatterns = [

    path('', views.ski_resorts_view),
    path('all/', views.get_all_ski_resorts),
    path('add/', views.add_ski_resort),
]