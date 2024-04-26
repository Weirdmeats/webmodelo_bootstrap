// Verificar si hay una canción en reproducción guardada en el almacenamiento local
const savedMusic = localStorage.getItem('currentMusic');
const musicPlayer = document.getElementById('musicPlayer');

// Si hay una canción guardada, establecerla como la fuente del reproductor de música
if (savedMusic) {
    musicPlayer.src = savedMusic;
    musicPlayer.play(); // Reproducir la música automáticamente
}

// Escuchar el evento antes de cambiar de página
window.addEventListener('beforeunload', function() {
    // Guardar la canción en reproducción actual en el almacenamiento local
    localStorage.setItem('currentMusic', musicPlayer.src);
});