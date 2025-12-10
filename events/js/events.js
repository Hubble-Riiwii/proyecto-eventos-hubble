// Arreglo completo de eventos
const eventos = [
    {
        nombre: "Divas Pop",
        fecha: "6 de marzo",
        ciudad: "Medellín",
        lugar: "Estadio Atanasio Girardot",
        precio: "$120.000",
        imagen: "../images/carrusel/divas-pop.png"
    }, 
    { 
        nombre: "Dreaming Festival", 
        fecha: "27 de junio",
        ciudad: "Medellín",
        lugar: "Centro de Convenciones",
        precio: "$150.000",
        imagen: "../images/carrusel/dreaming-festival.png"
    },
    {
        nombre: "El Traído",
        fecha: "13 de diciembre",
        ciudad: "Medellín",
        lugar: "Plaza Mayor",
        precio: "$90.000",
        imagen: "../images/carrusel/el-traido.png"
    },
    {
        nombre: "Hugel",
        fecha: "1 de marzo",
        ciudad: "Medellín",
        lugar: "Club Premium",
        precio: "$100.000",
        imagen: "../images/carrusel/hugel.png"
    },
    {
        nombre: "Juntos de Nuevo",
        fecha: "13 de diciembre",
        ciudad: "Medellín",
        lugar: "Estadio Atanasio Girardot",
        precio: "$110.000",
        imagen: "../images/carrusel/juntos-de-nuevo.png"
    },
    {
        nombre: "La Marranada",
        fecha: "12 de diciembre",
        ciudad: "Medellín",
        lugar: "Parque de la Música",
        precio: "$95.000",
        imagen: "../images/carrusel/la-marranada.png"
    },
    {
        nombre: "La Milonga",
        fecha: "12 de diciembre",
        ciudad: "Medellín",
        lugar: "Club de Tango",
        precio: "$85.000",
        imagen: "../images/carrusel/la-milonga.png"
    },
    {
        nombre: "Leyendas de la Salsa",
        fecha: "25 de abril",
        ciudad: "Medellín",
        lugar: "Teatro Metropolitano",
        precio: "$130.000",
        imagen: "../images/carrusel/las-leyendas-vivas-de-la-salsa.png"
    },
    {
        nombre: "Los Hispanos",
        fecha: "16 de diciembre",
        ciudad: "Medellín",
        lugar: "Centro Cultural",
        precio: "$90.000",
        imagen: "../images/carrusel/los-hispanos.png"
    },
    {
        nombre: "Reyes de la Balada",
        fecha: "21 de marzo",
        ciudad: "Medellín",
        lugar: "Teatro de la Ciudad",
        precio: "$100.000",
        imagen: "../images/carrusel/reyes-de-la-balada.png"
    }
];

// Función para abrir el evento al hacer click
function abrirEvento(index) {
    const evento = eventos[index];
    localStorage.setItem("eventoSeleccionado", JSON.stringify(evento));
    window.location.href = "event.html";
}

// Función para buscar evento por nombre
function buscarEvento() {
    const input = document.getElementById("search").value.toLowerCase().trim();
    
    if (input === "") {
        alert("Por favor, escribe el nombre de un evento");
        return;
    }
    
    // Buscar coincidencia parcial en el nombre
    const eventoIndex = eventos.findIndex(e => 
        e.nombre.toLowerCase().includes(input)
    );

    if (eventoIndex !== -1) {
        abrirEvento(eventoIndex);
    } else {
        alert("Evento no encontrado. Intenta con otro nombre.");
    }
}

// Búsqueda al presionar Enter
document.getElementById("search").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        buscarEvento();
    }
});

// Listener para el botón de búsqueda
document.getElementById("search-btn").addEventListener("click", buscarEvento);

// Listeners para cada evento del carrusel
document.addEventListener("DOMContentLoaded", function() {
    const eventosElements = document.querySelectorAll(".event");
    
    eventosElements.forEach(eventElement => {
        eventElement.style.cursor = "pointer";
        
        eventElement.addEventListener("click", function() {
            const index = parseInt(this.getAttribute("data-index"));
            abrirEvento(index);
        });
    });
});