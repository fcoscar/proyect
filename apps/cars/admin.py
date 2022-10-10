from django.contrib import admin
from .models import Car

# Register your models here.

class CarAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')
    search_fields = ('name', 'year', 'location')

admin.site.register(Car, CarAdmin)