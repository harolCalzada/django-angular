from django.conf.urls import url

from .views import home, restaurante_list, restaurante_detail

app_name = 'apis'

urlpatterns = [
    url(r'^$', home, name='home'),
    url(r'^restaurante_list/$', restaurante_list, name='restaurante_list'),
    url(r'^restaurante/(?P<id>[-\w]+)/$', restaurante_detail, name='restaurante_detail'),

]
