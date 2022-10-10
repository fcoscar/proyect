from django.contrib import admin
from .models import Category, ModelsAndTypes
# Register your models here.

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')
    search_fields = ['name']

class ModelAndTypesAdmin(admin.ModelAdmin):
    list_display = ('id', 'name','parent')
    list_display_links = ('id', 'name', 'parent')
    search_fields = ('name', 'parent')

admin.site.register(Category, CategoryAdmin)
admin.site.register(ModelsAndTypes, ModelAndTypesAdmin)