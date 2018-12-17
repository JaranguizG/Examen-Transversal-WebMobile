from django.conf.urls import url
from blog.views import ClienteList,ProductoViewSet,TiendaViewSet
from django.urls import path
from django.conf import settings
from . import views

urlpatterns =[
    path('cliente/',ClienteList.as_view(),name='clientelist'),
    path( 'producto/', ProductoViewSet.as_view(),name='producto' ),
    path( 'tienda/', TiendaViewSet.as_view(),name='tienda')
]