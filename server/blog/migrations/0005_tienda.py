# Generated by Django 2.1.4 on 2018-12-09 22:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_producto'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tienda',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('tienda', models.CharField(max_length=255)),
            ],
        ),
    ]
