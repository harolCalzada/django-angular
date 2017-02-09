import time
from django.shortcuts import render
# from django.http import JsonResponse
from django.http import HttpResponse
# from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
# from rest_framework.parsers import JSONParser
from .models import Restaurante
from .serializers import RestaurantSerializer


class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content into JSON.
    """
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)


def home(request):
    print 'hola mundo'
    return render(request, 'home.html', locals())


def restaurante_list(request):
    print ('restaurante list api')
    serializer = None
    result = {'status': 'error'}
    time.sleep(5)
    if request.method == 'GET':
        restaurantes = Restaurante.objects.all()
        serializer = RestaurantSerializer(restaurantes, many=True)
        result = {'status': 'success', 'data': serializer.data}
    return JSONResponse(result)


def restaurante_detail(request, id):
    print ('restaurante detail')
    serializer = None
    result = {'status': 'error'}
    if request.method == 'GET':
        restaurante = Restaurante.objects.filter(id=id)
        if restaurante:
            serializer = RestaurantSerializer(restaurante[0])
            result = {'status': 'success', 'data': serializer.data}
    print ('result ', result)
    return JSONResponse(result)
