const preloader = document.getElementById('preloader');
const mainContent = document.getElementById('mainContent');
const wrapper = document.querySelector('.invitation-wrapper');

window.addEventListener('load', () => {
    // Agregamos fade-out al preloader
    preloader.classList.add('fade-out');

    // Esperamos 1 segundo para que termine la transición
    setTimeout(() => {
        preloader.style.display = 'none'; // ocultamos completamente
        mainContent.classList.add('visible'); // mostramos el contenido principal
        wrapper.classList.add('visible');     // mostramos el contenido del sobre y botón
    }, 2500);
});
//Abrir la Invitacion
document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openInvitationBtn");

    openBtn.addEventListener("click", () => {
        // Abrir otra página en la misma ventana
        window.location.href = "Invitacion.html";

        // Si quieres abrir en una nueva pestaña, usa:
        // window.open("https://tu-pagina-destino.com", "_blank");
    });
});

