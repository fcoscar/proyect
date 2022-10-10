from rest_framework import status
from rest_framework.decorators import api_view
from .models import Car
from .serializers import CarSerializer
from rest_framework.response import Response
from django.db.models import Q



# Create your views here.

@api_view(['GET'])
def get_cars(request):

    brand = request.query_params.get('brand') if request.query_params.get('brand') is not None else 'Any'
    tipo = request.query_params.get('tipo') if request.query_params.get('tipo') is not None else 'Any'
    model = request.query_params.get('model') if request.query_params.get('model') is not None else 'Any'
    priceFrom = request.query_params.get('PriceFrom') if request.query_params.get('PriceFrom') is not None else '0'
    priceTo = request.query_params.get('PriceTo') if request.query_params.get('PriceTo') is not None else '1000000'
    location = request.query_params.get('Locatin') if request.Gquery_params.get('Location') is not None else 'Any'
    yearFrom = request.query_params.get('YearFrom') if request.query_params.get('YearFrom') is not None else '2007'
    yearTo = request.query_params.get('YearTo') if request.query_params.get('YearTo') is not None else '2023'

    if brand == 'Any' and tipo == 'Any' and model == 'Any' and priceFrom == 'Any' and \
            priceTo == 'Any' and location == 'Any' and yearFrom == 'Any' and yearTo == 'Any':
        cars = Car.objects.all()
        many = True if len(cars) >= 1 else False
        serializer = CarSerializer(cars, many=many)
        return Response(serializer.data)
    cars = Car.objects.all()
    many = True if len(cars) >= 1 else False
    serializer = CarSerializer(cars, many=many)
    return Response(serializer.data)

@api_view(['GET'])
def get_car(request, pk):
    try:
        pk = int(pk)
    except:
        return Response({
            'error': 'Car ID must be an integer'
        }, status=status.HTTP_404_NOT_FOUND)

    if Car.objects.filter(id=pk).exists():
        car = Car.objects.get(id=pk)
        car = CarSerializer(car, many=False)
        return Response({
            'car': car.data
        }, status=status.HTTP_200_OK)
    else:
        return Response({
            'error': 'Car with this ID not found'
        }, status=status.HTTP_404_NOT_FOUND)
