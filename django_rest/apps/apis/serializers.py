from rest_framework import serializers
from .models import Restaurante


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurante
        fields = ('id', 'nombre', 'descripcion', 'imagen', 'precio', 'direccion')
