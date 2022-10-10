from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import Category, ModelsAndTypes
# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get(request):
    if Category.objects.all().exists() and ModelsAndTypes.objects.all().exists():
        categories = Category.objects.all()
        modelsAndTypes = ModelsAndTypes.objects.all()
        result = []
        for brand in categories:
            brands = {}
            brands['id'] = brand.id
            brands['name'] = brand.name
            brands['tipos'] = []
            for tipo in modelsAndTypes:
                tipos = {}
                if not tipo.parent:
                    tipos['id'] = tipo.id
                    tipos['name'] = tipo.name
                    brands['tipos'].append(tipos)
                    tipos['models'] = []
                    for model in modelsAndTypes:
                        models = {}
                        if model.parent and model.parent.name == tipo.name and model.category.id == brand.id:
                            models['id'] = model.id
                            models['name'] = model.name
                            tipos['models'].append(models)
            result.append(brands)
        return Response({'categories': result}, status=status.HTTP_200_OK)



