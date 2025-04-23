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
    

    def validate_email(self,value):
        if CustomUser.objects.filter(email=value).exists():
            raise serializers.ValidationError("A user with this email already exists")
        return value
    
    def create(self,validated_data):
        user= CustomUser.objects.create_user(
            username= validated_data["username"],
            email= validated_data["email"],
            password = validated_data["password"]
        )
        return user