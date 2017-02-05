from django.shortcuts import render


def home(request):
    print 'hola mundo'
    return render(request, 'home.html', locals())
