from django.db import models

# Create your models here.

class Category(models.Model):
    class Meta:
        verbose_name_plural = 'Categories'
    name = models.CharField(max_length=250, unique=True)

    def __str__(self):
        return self.name

class ModelsAndTypes(models.Model):
    class Meta:
        verbose_name_plural = 'ModelsAndTypes'
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True)
    parent = models.ForeignKey('self', related_name='children', on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=250, unique=True)

    def __str__(self):
        return self.name