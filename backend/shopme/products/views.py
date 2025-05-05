from django.shortcuts import render
from rest_framework.views import APIView
from .models import Product
from .serializers import ProductSerializer
from rest_framework.response import Response
from rest_framework import status
import logging
logger = logging.getLogger(__name__)
# Create your views here.
class ListCreateProductView(APIView):

    def get(self,request):
        products= Product.objects.filter(stock__gt=0)
        serializer = ProductSerializer(products,many=True,context={'request':request})
        return Response(serializer.data)
    
    def post(self,request):
        logger.info(f"Incoming data: {request.data}")
        serializer = ProductSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)  # This will catch missing required fields
        serializer.save()
        return Response(serializer.data)