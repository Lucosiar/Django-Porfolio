// JS para funcionalidad cambio de idioma (en progreso)
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('ukButton').addEventListener('click', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe
        alert('This functionality is in process. Sorry :(');
    });

    // JS para el menú hamburguesa
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');

    hamburgerMenu.addEventListener('click', () => {
        menu.classList.toggle('menu-active');
        hamburgerMenu.classList.toggle('hamburger-active');
    });

    // JS para descargar CV
    window.descargarCV = function () {
        // URL del archivo PDF que quieres descargar
        var pdfURL = "/static/cuVitae/LuciaCosioCVAzul.pdf";

        // Crea un elemento de enlace temporal
        var enlaceTemporal = document.createElement("a");
        enlaceTemporal.style.display = "none";
        enlaceTemporal.href = pdfURL;
        enlaceTemporal.download = "nombre_del_archivo.pdf"; // Nombre del archivo a descargar

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
});

document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.gallery img');
    
    images.forEach(function(img) {
        img.addEventListener('click', function() {
            // Implementar funcionalidad de vista previa en pantalla completa o lightbox aquí.
        });
    });
});
