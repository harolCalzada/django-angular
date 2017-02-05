from django.contrib import admin
from .models import Restaurante


@admin.register(Restaurante)
class RestauranteAdmin(admin.ModelAdmin):
    pass



