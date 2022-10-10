from django.urls import path
from . import views

urlpatterns = [
    path('all', views.get_cars),
    path('<str:pk>', views.get_car)
]