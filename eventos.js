let divBoton = document.getElementsByClassName('contenedor__boton')[0];
divBoton.addEventListener('click', () => alert('Hola! Soy el div'));

let btn = document.getElementById('btnSaludar');
btn.addEventListener('click', (event) => {
    event.stopPropagation();
    alert('Hola!');
});
