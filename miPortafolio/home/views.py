from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.conf import settings
from django.contrib import messages
from django.utils import translation
from django.urls import reverse
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

    if request.method == "POST":
        nombre = request.POST["nombre"].strip()
        correo = request.POST["correo"].strip()
        mensaje = request.POST["mensaje"].strip()

         # Validar los campos
        if not nombre or not correo or not mensaje:
            messages.error(request, "Por favor, complete todos los campos antes de enviar el formulario.")
            return render(request, 'home.html')


        subject = "Mensaje de contacto de {}".format(nombre)
        template = render_to_string('email_template.html', {
            'nombre' : nombre,
            'correo': correo,
            'mensaje':  mensaje,
        })

        correo = EmailMessage(
            subject,
            template,
            settings.EMAIL_HOST_USER,
            ['lucosiar333@gmail.com']
            #modificar correo al que llegan 
        )

        try:
            correo.send()
            messages.success(request, "El correo ha sido enviado")
        except Exception as e:
            messages.error(request, "Hubo un error al enviar el correo")
      
    return render(request, 'home.html')
    

def cambiar_idioma(request, idioma):
    # Asegúrate de que el idioma sea válido (es o en)
    if idioma in ['es', 'en']:
        # Cambia el idioma activo
        request.session['django_language'] = idioma
    # Redirige a la página anterior o a la página de inicio
    return HttpResponseRedirect(reverse('home'))