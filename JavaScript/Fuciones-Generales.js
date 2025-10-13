// Fecha objetivo del evento
const targetDate = new Date("2025-11-23T00:00:00"); // Cambia esta fecha a tu evento

// Función para actualizar la cuenta regresiva
function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.querySelector(".countdown-days").textContent = "0";
        document.querySelector(".countdown-hours").textContent = "0";
        document.querySelector(".countdown-minutes").textContent = "0";
        document.querySelector(".countdown-seconds").textContent = "0";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.querySelector(".countdown-days").textContent = days;
    document.querySelector(".countdown-hours").textContent = hours;
    document.querySelector(".countdown-minutes").textContent = minutes;
    document.querySelector(".countdown-seconds").textContent = seconds;
}

// Actualiza cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Llamada inicial

const calendarButton = document.querySelector(".add-calendar-btn");

// Datos del evento
const eventTitle = "Boda de Dayan Ismael Aquino & Rashell De La Cruz";
const eventDescription = "¡No te lo pierdas!";
const eventLocation = "https://www.google.com/maps/place/City+of+hope+RD+-+Ciudad+de+la+Esperanza+RD/@18.449311,-69.3720846,741m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8eaf6155f878e3ff:0x5a28b2a5d23f45e9!8m2!3d18.449311!4d-69.3720846!16s%2Fg%2F11v5wd7jry?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D";
const eventStart = new Date("2025-11-23T18:00:00"); // fecha y hora inicio
const eventEnd = new Date("2025-11-23T21:00:00");   // fecha y hora de termino

function formatDateToGoogleCalendar(date) {
    // Formato YYYYMMDDTHHMMSSZ
    return date.toISOString().replace(/-|:|\.\d+/g, '');
}

function openGoogleCalendar() {
    const start = formatDateToGoogleCalendar(eventStart);
    const end = formatDateToGoogleCalendar(eventEnd);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${start}/${end}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}`;
    
    window.open(url, "_blank"); // Abre en una nueva pestaña
}

calendarButton.addEventListener("click", openGoogleCalendar);

// Selecciona todos los botones de las preguntas
/*document.querySelectorAll("section button").forEach(button => {
    button.addEventListener("click", () => {
        // Verifica si ya existe un div de respuesta
        let answerDiv = button.nextElementSibling;
        
        if (answerDiv && answerDiv.classList.contains("faq-answer")) {
            // Alterna visibilidad
            if (answerDiv.style.display === "block") {
                answerDiv.style.display = "none";
            } else {
                answerDiv.style.display = "block";
            }
        } else {
            // Crea el div de respuesta si no existe
            answerDiv = document.createElement("div");
            answerDiv.className = "faq-answer px-4 pb-4 text-wedding-blue-900";
            answerDiv.style.display = "block";
            answerDiv.textContent = "Aquí va la respuesta a la pregunta."; // Cambia según la pregunta
            button.parentNode.appendChild(answerDiv);
        }
    });
});*/

const respuestas = [
    "Sí, habrá estacionamiento disponible en el lugar",
    "Sí, habrá estacionamiento disponible en el lugar",
    "En la entrada de la recepción alguien te indicará el número de tu mesa. También podrás encontrar tu mesa en la entrada según tu nombre. Las mesas fueron elegidas con anticipación, favor de no cambiar su ubicación.",
    "No, la boda es exclusiva para adultos",
    "La invitación especifica la cantidad de invitados que te corresponden."
];

document.querySelectorAll("section button").forEach((button, index) => {
    button.addEventListener("click", () => {
        let answerDiv = button.nextElementSibling;

        if (answerDiv && answerDiv.classList.contains("faq-answer")) {
            // Alterna visibilidad
            answerDiv.style.display = (answerDiv.style.display === "block") ? "none" : "block";
        } else {
            // Crea el div de respuesta y lo inserta justo después del botón
            answerDiv = document.createElement("div");
            answerDiv.className = "faq-answer px-4 pb-4 text-wedding-blue-900";
            answerDiv.style.display = "block";
            answerDiv.textContent = respuestas[index];
            button.parentNode.insertBefore(answerDiv, button.nextSibling);
        }
    });
});


// Musica de la pagina
/*document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("background-music");
    const button = document.querySelector(".wave-button");
    const icon = button.querySelector("svg");

    let isPlaying = false;

    button.addEventListener("click", () => {
        if (!isPlaying) {
            music.play();
            isPlaying = true;

            // Cambiar ícono a "pause"
            icon.innerHTML = `
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
            `;
        } else {
            music.pause();
            isPlaying = false;

            // Cambiar ícono a "play"
            icon.innerHTML = `
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
            `;
        }
    });

    // Evita errores de autoplay bloqueado por el navegador
    music.addEventListener("pause", () => isPlaying = false);
    music.addEventListener("play", () => isPlaying = true);
});*/

document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("background-music");
    const button = document.querySelector(".wave-button");
    const icon = button.querySelector("svg");

    let isPlaying = false;

    // --- INTENTO DE AUTOREPRODUCCIÓN ---
    const intentarReproducir = () => {
        music.volume = 0.7; // volumen inicial suave
        const playPromise = music.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                isPlaying = true;
                icon.innerHTML = `
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                `;
            }).catch(() => {
                // Si el navegador bloquea el autoplay, espera un clic del usuario
                document.addEventListener("click", iniciarDespuesClick, { once: true });
            });
        }
    };

    const iniciarDespuesClick = () => {
        music.play();
        isPlaying = true;
        icon.innerHTML = `
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
        `;
    };

    // --- BOTÓN DE CONTROL ---
    button.addEventListener("click", () => {
        if (!isPlaying) {
            music.play();
            isPlaying = true;
            icon.innerHTML = `
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
            `;
        } else {
            music.pause();
            isPlaying = false;
            icon.innerHTML = `
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
            `;
        }
    });

    // Sincroniza el estado si se pausa o reanuda desde fuera
    music.addEventListener("pause", () => isPlaying = false);
    music.addEventListener("play", () => isPlaying = true);

    // Intentar reproducir automáticamente al cargar
    intentarReproducir();
});


//nuevos cambios 
//Cirsulo de la cuenta regresiva en blanco
document.addEventListener("DOMContentLoaded", () => {
  const EVENT_DATE = new Date("2025-11-23T00:00:00");

  const daysEl = document.querySelector(".countdown-days");
  const hoursEl = document.querySelector(".countdown-hours");
  const minutesEl = document.querySelector(".countdown-minutes");
  const secondsEl = document.querySelector(".countdown-seconds");
  const circleEl = document.querySelector(".progress-circle");

  const circumference = 282.7433388230814;
  circleEl.style.strokeDasharray = circumference;

  const totalTime = EVENT_DATE.getTime() - new Date().getTime();

  function updateCountdown() {
    const now = new Date();
    let diff = EVENT_DATE.getTime() - now.getTime();
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = days;
    hoursEl.textContent = hours.toString().padStart(2, "0");
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");

    // 🔹 Aquí el cambio clave: invertimos el progreso
    const progress = 1 - diff / totalTime;
    const offset = circumference * progress;
    circleEl.style.strokeDashoffset = offset;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});