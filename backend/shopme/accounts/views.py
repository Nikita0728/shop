from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import RegisterSerializer
from rest_framework import permissions,status
from rest_framework.response import Response
# Create your views here.
class CreateUserAPI(APIView):
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]
    
    def post(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            user= serializer.save()


        return Response(
            {
                "message":"user created successfully"
            },status=status.HTTP_201_CREATED

        )