from django.shortcuts import render

def tshirts(request):
    return render(request, 'store/tshirts.html')
