document.addEventListener('DOMContentLoaded', () => {
    const openInvitationBtn = document.getElementById('openInvitationBtn');
    const notFoundMessage = document.getElementById('notFoundMessage');

    openInvitationBtn.addEventListener('click', () => {
        // Aquí puedes implementar la lógica para verificar al invitado
        // Por ejemplo, podrías pedir un código o nombre
        const guestFound = false; // Simula si se encontró al invitado o no

        if (guestFound) {
            // Si el invitado es encontrado, redirige o muestra la invitación
            window.location.href = 'index.html'; // Redirige a la página de la invitación
        } else {
            // Si no se encuentra, muestra el mensaje de error
            notFoundMessage.classList.remove('hidden');
        }
    });
});

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('fade-out');

    // Opcional: eliminar del DOM después de la transición
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000); // coincide con la duración del transition
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
        nameText = `Familia ${fam1}${fam2 ? " & " + fam2 : ""}`;
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
