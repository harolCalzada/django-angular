# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Restaurante(models.Model):
    nombre = models.CharField('Nombre', max_length=100)
    direccion = models.TextField('Dirección')
    descripcion = models.TextField('Descripción')
    imagen = models.FileField('Imagen', upload_to='uploads/restarurante', blank=True, null=True)
    precio = models.CharField('Precio', max_length=100)

    class Meta:
        verbose_name = 'Restaurante'
        verbose_name_plural = 'Restaurantes'

