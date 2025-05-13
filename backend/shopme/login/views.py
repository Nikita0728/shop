from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import status
from accounts.models import CustomUser
# Create your views here.
class LoginUserAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(email=email, password=password)

        if user is not None:
            refresh = RefreshToken.for_user(user)
            access = refresh.access_token
            return Response({
                "message": "Login Successful",
                "isAdmin": user.is_superuser,
                "access": str(access),
                "refresh": str(refresh),
                "status": "Logged In"
            })
        else:
            return Response({
                "message": "Invalid credentials",
                "status": "Failed"
            }, status=status.HTTP_401_UNAUTHORIZED)
