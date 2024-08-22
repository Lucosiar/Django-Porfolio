// JS para el menú hamburguesa
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');

    if (hamburgerMenu && menu) {
        hamburgerMenu.addEventListener('click', () => {
            menu.classList.toggle('menu-active');
            hamburgerMenu.classList.toggle('hamburger-active');
        });
    }
});

// JS para descargar CV
window.descargarCV = function () {
    // URL del archivo PDF que quieres descargar
    var pdfURL = "/static/cuVitae/LuciaCosioCV.pdf";

    // Crea un elemento de enlace temporal
    var enlaceTemporal = document.createElement("a");
    enlaceTemporal.style.display = "none";
    enlaceTemporal.href = pdfURL;
    enlaceTemporal.download = "LuciaCosioCV.pdf"; 

    // Agrega el enlace temporal al documento
    document.body.appendChild(enlaceTemporal);

    // Simula un clic en el enlace para iniciar la descarga
    enlaceTemporal.click();

    // Elimina el enlace temporal del documento
    document.body.removeChild(enlaceTemporal);
};

// Validar formulario
document.querySelector('form').addEventListener('submit', function (event) {
    var nombre = document.getElementById('nombre').value.trim();
    var correo = document.getElementById('correo').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();
    var errorMessage = document.getElementById('error-message');
    
    if (nombre === "" || correo === "" || mensaje === "") {
        errorMessage.textContent = "Por favor, complete todos los campos antes de enviar el formulario.";
        errorMessage.style.display = "block"; // Muestra el mensaje de error
        event.preventDefault(); // Evita que el formulario se envíe
    } else {
        errorMessage.style.display = "none"; // Oculta el mensaje de error si todo está completo
    }
});

// Funcionalidad para mostrar mensajes de éxito o error al enviar el formulario
document.querySelector('#contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previene el envío normal del formulario

    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRFToken': form.querySelector('input[name="csrfmiddlewaretoken"]').value
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('¡Mensaje enviado con éxito!');
            form.reset(); // Limpia el formulario después de mostrar el mensaje
        } else {
            alert('Error al enviar el mensaje: ' + data.message);
        }
    })
    .catch(error => {
        alert('Error al enviar el mensaje. Ocurrió un error al procesar tu solicitud.');
        console.error('Error:', error);
    });

    return false; // Previene el envío normal del formulario
});

document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.gallery img');
    
    images.forEach(function(img) {
        img.addEventListener('click', function() {
            // Implementar funcionalidad de vista previa en pantalla completa o lightbox aquí.
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');

    hamburgerMenu.addEventListener('click', function() {
        menu.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });
});

// JS para funcionalidad cambio de idioma (en progreso)
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('ukButton').addEventListener('click', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe
        alert('This functionality is in process. Sorry :(');
    });
});

