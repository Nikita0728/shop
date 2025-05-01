from django.shortcuts import render
from rest_framework.views import APIView
from .models import Products
from .serializers import ProductSerializer
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class ListCreateProductView(APIView):

    def get(self,request):
        products= Products.objects.filter(stock__gt=0)
        serializer = ProductSerializer(products,many=True,context={'request':request})
        return Response(serializer.data)
    
    def post(self,request):
        serializer= ProductSerializer(data= request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)