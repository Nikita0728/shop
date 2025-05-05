from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.Serializer):
    image= serializers.ImageField(required=False, allow_null= True)
    class Meta:
        model= Product
        fields='__all__'
       
    def create(self, validated_data):
        return Product.objects.create(**validated_data)
