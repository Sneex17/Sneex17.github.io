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