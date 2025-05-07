from django.contrib import admin
from django.urls import path, include
from.views import LoginUserAPIView
urlpatterns = [
    path('',LoginUserAPIView.as_view())
]
