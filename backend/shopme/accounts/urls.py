from django.urls import path,include
from .views import CreateUserAPI
urlpatterns = [

path('register/',CreateUserAPI.as_view(),name="register")
]
