from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Car
from apps.user.serializers import UserCreateSerializer

class CarSerializer(ModelSerializer):
    brand = serializers.CharField(source='brand.name')
    type = serializers.CharField(source='type.name')
    model = serializers.CharField(source='model.name')
    user = UserCreateSerializer(many=False)
    class Meta:
        model = Car
        fields = '__all__'

