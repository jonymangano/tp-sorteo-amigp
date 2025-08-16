// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
alert('¡Bienvenido al juego del Amigo Secreto!');

function agregarAmigo() {
    let nombre = document.getElementById('nombre').value;
    
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    } else if (amigos.includes(nombre)) {
        alert('Este nombre ya fue ingresado. Por favor, ingresa un nombre diferente.');
        return;
    } else {
        amigos.push(nombre);
    limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#nombre').value = '';   
}
