from django.db import models
from apps.category.models import Category
from apps.category.models import ModelsAndTypes
from apps.user.models import UserAccount
from datetime import datetime
# Create your models here.

class Car(models.Model):
    brand = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='brand', null=True)
    type = models.ForeignKey(ModelsAndTypes, on_delete=models.CASCADE, related_name='type', null=True)
    model = models.ForeignKey(ModelsAndTypes, on_delete=models.CASCADE, related_name='model', null=True)
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, null=False, blank=False)
    year = models.IntegerField(null=True, blank=True)
    location = models.CharField(max_length=100, null=True, blank=True, )
    exterior = models.CharField(max_length=200, null=True, blank=True)
    interior = models.CharField(max_length=200, null=True, blank=True)
    combustible = models.CharField(max_length=200, null=True, blank=True)
    transmission = models.CharField(max_length=200, null=True, blank=True)
    traccion = models.CharField(max_length=200, null=True, blank=True)
    passengers = models.CharField(max_length=200, null=True, blank=True)
    doors = models.IntegerField(null=True, blank=True)
    kilometraje = models.CharField(max_length=200, null=True, blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    created = models.DateField(datetime.now(), null=True)

    def __str__(self):
        return self.name
