// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];

function agregarAmigo(){
    let nombreIngresado = document.getElementById('amigo').value;

    if(nombreIngresado == ''){
        alert('¡Por favor, ingresa un nombre válido!');
    } else {
        // Registramos el nombre en la lista
        listaNombres.push(nombreIngresado);
        // Imprimimos el nombre en el campo ul
        addLi('listaAmigos', nombreIngresado);
        limpiarCaja();
        document.getElementById('resultado').innerHTML = "";
    }

}

function addLi (ulName, value) {
    let liNode = document.createElement('li');
    liNode.innerText = value;

    document.getElementById(ulName).appendChild(liNode);
}

function limpiarCaja () {
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    if(listaNombres.length == 0) {
        alert('La lista de amigos se encuentra vacía.');
    } else {
        //Generamos un número aleatorio entre 0 y la cantidad total de nombres ingresados.
        let numeroGenerado =  Math.floor(Math.random() * listaNombres.length);
        //Devolvemos de la lista de nombre el valor con el índice entregado por el número aleatorio.
        addLi('resultado', `El amigo secreto sorteado es: ${listaNombres[numeroGenerado]}`);
        //Eliminamos los elementos de la lista en el html
        document.getElementById('listaAmigos').innerHTML = "";
        //Eliminamos los elementos de la lista
        listaNombres.length = 0;
    }
}