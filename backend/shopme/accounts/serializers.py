from .models import CustomUser
from rest_framework import serializers
from rest_framework.validators import UniqueValidator

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email']  
        extra_kwargs = {
            'password': {'write_only': True}  
        }

class RegisterSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(required=True,
                                   validators=[
                                       UniqueValidator(queryset=CustomUser.objects.all())
                                   ])
    class Meta:
        model = CustomUser
        fields =['id', 'username', 'email', 'password', 'age', 'phone_number']
        extra_kwargs = {
            'password': {'write_only': True}  
        }
