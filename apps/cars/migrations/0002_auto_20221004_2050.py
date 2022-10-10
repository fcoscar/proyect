# Generated by Django 3.1.7 on 2022-10-05 00:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0002_auto_20221004_2045'),
        ('cars', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='car',
            name='category',
        ),
        migrations.AddField(
            model_name='car',
            name='brand',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='brand', to='category.category'),
        ),
        migrations.AddField(
            model_name='car',
            name='model',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='model', to='category.category'),
        ),
        migrations.AddField(
            model_name='car',
            name='type',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='type', to='category.category'),
        ),
    ]
