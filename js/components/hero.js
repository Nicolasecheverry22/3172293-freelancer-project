// Lógica para cargar el componente hero

document.addEventListener("DOMContentLoaded", function(){

    const heroElement = document.querySelector(".hero-container")

    if (!heroElement) return; 

        fetch("/views/components/hero.html")
        // La respuesta lo convierte a texto plano
        .then(response => response.text())

        // Inserta el contenido html del navbar en el contenedor correspondiente
        .then(data => {
            heroElement.innerHTML = data;
    })
        .catch(error => console.log("Error cargando el hero"));
    
});