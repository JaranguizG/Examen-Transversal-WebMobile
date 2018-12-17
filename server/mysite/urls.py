from django.contrib import admin
from django.urls import path
from blog.models import Producto,Tienda
from django.conf.urls import url, include
from rest_framework.authtoken import views



urlpatterns = [
    path( 'admin/', admin.site.urls ),
    path('', include('blog.urls')),
]
urlpatterns +=[
    path('/auth/',include('rest_framework.urls')),
]