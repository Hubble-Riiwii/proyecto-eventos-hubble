// Cargar datos del evento desde localStorage
document.addEventListener("DOMContentLoaded", function() {
    const eventoData = localStorage.getItem("eventoSeleccionado");
    
    if (eventoData) {
        const evento = JSON.parse(eventoData);
        
        // Actualizar el título de la página
        document.title = evento.nombre + " - Detalles";
        
        // Actualizar los elementos de la página
        document.getElementById("event-name").textContent = evento.nombre;
        document.getElementById("event-date").textContent = evento.fecha;
        document.getElementById("event-lugar").textContent = evento.lugar;
        document.getElementById("event-ciudad").textContent = evento.ciudad;
        document.getElementById("event-precio").textContent = evento.precio;
        
        // Actualizar la imagen
        const imgElement = document.getElementById("event-img");
        imgElement.src = evento.imagen;
        imgElement.alt = evento.nombre;
        
        // Función para el botón de comprar
        document.querySelector(".buy-btn").addEventListener("click", function() {
            alert(`Redirigiendo a la compra de entradas para: ${evento.nombre}`);
            // Aquí iría la lógica real de compra
        });
    } else {
        // Si no hay datos, redirigir a la página de eventos
        alert("No se ha seleccionado ningún evento. Redirigiendo...");
        window.location.href = "events.html";
    }
    
    // Limpiar localStorage al salir de la página
    window.addEventListener("beforeunload", function() {
        localStorage.removeItem("eventoSeleccionado");
    });
});