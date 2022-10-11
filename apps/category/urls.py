from django.urls import path
from . import views

urlpatterns = [
    path('models/<str:brand>', views.getModels),
    path('brands', views.get),

]