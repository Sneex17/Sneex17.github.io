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
    const params = getUrlParams();
    const dynamicName = document.getElementById("dynamicName");
    const guestCount = document.getElementById("guestCount");

    let nameText = "";
    let countText = "";

    if (params.familia1 || params.familia2) {
        // Caso familias
        const fam1 = params.familia1 || "";
        const fam2 = params.familia2 || "";
        nameText = `Familia ${fam1}${fam2 ? " & " + fam2 : ""}`;
    } else if (params.nombre && params.apellido) {
        // Caso persona individual
        nameText = `${params.nombre} ${params.apellido}`;
    } else {
        // Caso sin parámetros válidos
        nameText = "Invitado";
    }

    const cantidad = params.cantidad ? parseInt(params.cantidad) : 1;
    countText = cantidad === 1 ? "Invitación válida para 1 persona" : `Invitación válida para ${cantidad} personas`;

    // Actualiza el HTML
    dynamicName.textContent = nameText;
    guestCount.textContent = countText;
}

// Ejecutar al cargar la página
window.addEventListener("load", updateInvitation);
