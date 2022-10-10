# Generated by Django 3.1.7 on 2022-10-05 00:45

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('category', '0002_auto_20221004_2045'),
    ]

    operations = [
        migrations.CreateModel(
            name='Car',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('year', models.IntegerField(blank=True, null=True)),
                ('location', models.CharField(blank=True, max_length=100, null=True)),
                ('exterior', models.CharField(blank=True, max_length=200, null=True)),
                ('interior', models.CharField(blank=True, max_length=200, null=True)),
                ('combustible', models.CharField(blank=True, max_length=200, null=True)),
                ('transmission', models.CharField(blank=True, max_length=200, null=True)),
                ('traccion', models.CharField(blank=True, max_length=200, null=True)),
                ('passengers', models.CharField(blank=True, max_length=200, null=True)),
                ('doors', models.IntegerField(blank=True, null=True)),
                ('kilometraje', models.CharField(blank=True, max_length=200, null=True)),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='category.category')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
