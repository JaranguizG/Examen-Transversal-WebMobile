from .models import Producto,Tienda,Cliente
from rest_framework import serializers

class ProductoSerializer( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = Producto
        fields = ( 'id', 'name', 'costo_pre', 'costo_real', 'tienda', 'nota_aditional' )

class TiendaSerializer( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = Tienda
        fields = ( 'id', 'tienda' )

class ClienteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Cliente
        fields = ('nombre','email', 'password')



