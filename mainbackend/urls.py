from django.urls import path 
from . import views 
from .views import UserLoginAPIView

urlpatterns = [
    path('user/' , views.CreateUserView.as_view(), name = 'create_user'),
    path('login/', UserLoginAPIView.as_view(), name='login'),
    ]


