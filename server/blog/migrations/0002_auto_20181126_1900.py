# Generated by Django 2.1.2 on 2018-11-26 22:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='bear',
            name='estado',
            field=models.CharField(default='disponible', max_length=255),
        ),
        migrations.AlterField(
            model_name='bear',
            name='description',
            field=models.TextField(default=''),
        ),
    ]
