from django.urls import path
from . import views
from .views import galeria

urlpatterns = [
    path('', views.home, name="home"),
    path('contacto/', views.contact, name="contacto"),
    path('cambiar_idioma/<str:idioma>/', views.cambiar_idioma, name='cambiar_idioma'),
    path('galeria/', galeria, name='galeria'),
]
