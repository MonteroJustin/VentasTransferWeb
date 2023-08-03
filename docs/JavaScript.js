

// esta funcion se activa la primera vez que carga la pantalla
// se desactiva cuando la pnatalla termino de cargar por completo
window.onload = function() {
    var contenedor = document.getElementById('contenedor_carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0' ;
}

