from .models import Producto,Tienda,Cliente
from rest_framework import viewsets,generics
from blog.serializers import ProductoSerializer,TiendaSerializer,ClienteSerializer
from django.shortcuts import render, get_object_or_404

class ProductoViewSet( generics.ListCreateAPIView ):
    queryset = Producto.objects.all().order_by( 'name' )
    serializer_class = ProductoSerializer
class TiendaViewSet( generics.ListCreateAPIView ):
    queryset = Tienda.objects.all().order_by( 'tienda' )
    serializer_class = TiendaSerializer
class ClienteList(generics.ListCreateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

    def get_object(self):
        queryset = self.queryset()
        obj = get_object_or_404(
            queryset,
            pk = self.kwargs['pk'],
        )
        return obj