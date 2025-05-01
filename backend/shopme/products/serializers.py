from rest_framework import serializers
from .models import Products


class ProductSerializer(serializers.Serializer):
    image= serializers.ImageField(required=False, allow_null= True)
    class Meta:
        model= Products
        fields='__all__'
