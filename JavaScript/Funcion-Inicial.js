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

/*Validacion de los nombres de las familias o personas individual*/
// Función para obtener parámetros de la URL
function getUrlParams() {
    const path = window.location.pathname; // Obtiene el path después del dominio
    const segments = path.split("/").filter(Boolean); // Quita segmentos vacíos
    const params = {};

    segments.forEach(segment => {
        const [key, value] = segment.split("=");
        if (key && value) {
            params[key.toLowerCase()] = decodeURIComponent(value);
        }
    });

    return params;
}

// Función para actualizar la invitación
function updateInvitation() {
    const params = new URLSearchParams(window.location.search);
    const dynamicName = document.getElementById("dynamicName");
    const guestCount = document.getElementById("guestCount");

    let nameText = "";
    let countText = "";

    // Detectar si es familia o persona individual
    if (params.has("Familia1") || params.has("Familia2")) {
        const fam1 = params.get("Familia1") || "";
        const fam2 = params.get("Familia2") || "";
        nameText = `Familia ${fam1}${fam2 ? " " + fam2 : ""}`;
    } else if (params.has("Nombre") && params.has("Apellido")) {
        const nombre = params.get("Nombre");
        const apellido = params.get("Apellido");
        nameText = `${nombre} ${apellido}`;
    } else {
        nameText = "Invitado";
    }

    // Cantidad
    const cantidad = params.has("Cantidad") ? parseInt(params.get("Cantidad")) : 1;
    countText = cantidad === 1 ? "Invitación válida para 1 persona" : `Invitación válida para ${cantidad} personas`;

    // Actualizar HTML
    dynamicName.textContent = nameText;
    guestCount.textContent = countText;
}

// Ejecutar al cargar la página
window.addEventListener("load", updateInvitation);
