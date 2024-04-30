document.addEventListener('DOMContentLoaded', function() {
    // Función para mostrar la alerta cada 10 segundos
    function mostrarAlertaCada10Segundos() {
        // Selecciona la alerta por su ID
        var alerta = document.getElementById('index_alert');
        // Muestra la alerta
        alerta.style.display = 'block';
        // Configura un temporizador para ocultar la alerta después de 5 segundos
        setTimeout(function() {
            alerta.style.display = 'none';
        }, 10000); // 5000 milisegundos = 5 segundos
    }

    // Llama a la función por primera vez para que la alerta se muestre de inmediato
    mostrarAlertaCada10Segundos();

    // Configura un intervalo para llamar a la función cada 20 segundos
    setInterval(mostrarAlertaCada10Segundos, 20000); // 1000 milisegundos = 100 segundos
});
