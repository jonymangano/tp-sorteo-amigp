// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        limpiarCaja('#amigo');
        return;
    } else if (amigos.includes(nombre)) {
        alert('Este nombre ya fue ingresado. Si tenes 2 o más amigos con el mismo nombre por favor diferencialos.');
        limpiarCaja('#amigo');
        return;
    } else {
        amigos.push(nombre);
        imprimirUnaLista('listaAmigos', amigos);
        capitalizar('listaAmigos');
        limpiarCaja('#amigo');
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

function indiceAleatorio(lista) {
    let indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}

function sortearAmigo() {
    let listaAmigos = document.getElementById('resultado');
    if (amigos.length < 2) {
        alert('Por favor, ingresa al menos dos amigos para sortear.');
        return;
    } else {
        listaAmigos.innerHTML = `El amigo secreto es: <strong>${indiceAleatorio(amigos)}</strong>`;
        capitalizar('resultado');
        finalizar();
        return;
    }
}


function capitalizar(id) {
    const elemento = document.getElementById(id);
    elemento.style.textTransform = 'capitalize';
}

function limpiarCaja(id) {
    document.querySelector(id).value = '';   
}


function finalizar() {
    document.getElementById('amigo').value = '';
    document.getElementById('listaAmigos').innerHTML = '';
    amigos = [];
    return;
}

