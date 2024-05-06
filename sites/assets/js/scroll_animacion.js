// Función para agregar animación al texto
function animateText() {
    var text = document.getElementById("animatedText");
    text.classList.add("animate__animated", "animate__bounce"); // Agrega las clases de Animate.css para la animación de rebote
}

// Llama a la función animateText después de que el documento se haya cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    animateText();
});