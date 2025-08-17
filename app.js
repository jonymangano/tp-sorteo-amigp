// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        limpiarCaja();
        return;
    } else if (amigos.includes(nombre)) {
        alert('Este nombre ya fue ingresado. Si tenes 2 o más amigos con el mismo nombre por favor diferencialos.');
        limpiarCaja();
        return;
    } else {
        amigos.push(nombre);
        imprimirUnaLista('listaAmigos', amigos);
        capitalizar('listaAmigos');
    limpiarCaja();
    }
    console.log(amigos);
    return;
}

function imprimirUnaLista(id, lista) {
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = '';
    for (lista of lista) {
        elementoHTML.innerHTML += `<li>${lista}</li>`;
    }
        return;
}

function capitalizar(id) {
    const elemento = document.getElementById(id);
    elemento.style.textTransform = 'capitalize';
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';   
}
