from django.db import models

class Perro( models.Model ):
    id = models.AutoField( primary_key = True )
    name = models.CharField( max_length = 255 )
    description = models.TextField( default= '' )
    estado = models.CharField( max_length = 255, default = 'disponible')
    imageUrl = models.CharField( max_length = 255, default = '' )

    def __str__( self ):
        return self.name

class Producto( models.Model ):
    id = models.AutoField( primary_key = True )
    name = models.CharField( max_length = 255 )
    costo_pre = models.IntegerField(default=0)
    costo_real = models.IntegerField(default=0)
    tienda = models.CharField( max_length = 255 )
    nota_aditional = models.TextField( default= '' )

    def __str__( self ):
        return self.name

class Tienda(models.Model):
    id =models.AutoField(primary_key = True )
    tienda = models.CharField( max_length = 255 )
    
    def __str__( self ):
        return self.tienda
    
class Cliente(models.Model):
    nombre = models.CharField(max_length = 50)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length=30)
