from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    image= serializers.ImageField(required=False, allow_null= True)
    class Meta:
        model= Product
        fields='__all__'
    
    def validate_stock(self, value):
        # Convert string to integer if needed
        if isinstance(value, str):
            try:
                return int(value)
            except ValueError:
                raise serializers.ValidationError("Stock must be a number.")
        return value
    def create(self, validated_data):
        return Product.objects.create(**validated_data)
