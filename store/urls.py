from django.urls import path

from . import views

urlpatterns = [
    path('tshirts/', views.tshirts, name='tshirt'),
]