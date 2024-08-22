from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.core.mail import EmailMessage
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.conf import settings
from django.contrib import messages
from django.utils import translation
from django.urls import reverse
from django.http import JsonResponse
# Create your views here.

def set_language(request):
    if request.method == 'POST':
        lang_code = request.POST.get('language', 'es') 
        translation.activate(lang_code)
        request.session[translation.LANGUAGE_SESSION_KEY] = lang_code
    return HttpResponse('OK')

# Página principal
def home(request):
    return render(request, 'home.html')

# Segunda página de fotos
def galeria(request):
   return render(request, 'galeria.html')


def contact(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        correo = request.POST.get('correo')
        mensaje = request.POST.get('mensaje')

        if nombre and correo and mensaje:
            email = EmailMessage(
                subject=f'Mensaje de {nombre}',
                body=mensaje,
                from_email=correo,  # El correo del usuario en el campo "From"
                to=[settings.EMAIL_HOST_USER],  # Tu dirección de correo para recibir el mensaje
                reply_to=[correo]  # Opcional: Puedes agregar el correo del usuario para respuestas
            )
            try:
                email.send(fail_silently=False)
                return JsonResponse({'success': True, 'message': 'Mensaje enviado con éxito.'})
            except Exception as e:
                return JsonResponse({'success': False, 'message': 'Error al enviar el mensaje: ' + str(e)})
        else:
            return JsonResponse({'success': False, 'message': 'Todos los campos son requeridos.'})

    return render(request, 'contacto.html')
    

def cambiar_idioma(request, idioma):
    # Asegúrate de que el idioma sea válido (es o en)
    if idioma in ['es', 'en']:
        # Cambia el idioma activo
        request.session['django_language'] = idioma
    # Redirige a la página anterior o a la página de inicio
    return HttpResponseRedirect(reverse('home'))