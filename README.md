![amigosecreto_imagen](https://github.com/user-attachments/assets/7b885ce1-ef4a-49b6-bc51-0af09a034eb8)

# Challenge - Amigo Secreto

## 1. Descripción del Proyecto

El proyecto Challenge - Amigo Secreto es una aplicación web desarrollada con JavaScript que permite registrar listas de nombres de amigos y seleccionar aleatoriamente uno de ellos como "Amigo Secreto". La plataforma está diseñada para ser intuitiva, fácil de usar y accesible desde cualquier dispositivo con un navegador web.

La tradición del Amigo Secreto es una dinámica social muy popular en reuniones familiares, grupos de amigos y entornos de trabajo. Sin embargo, la organización puede volverse complicada cuando se manejan grandes listas de participantes. Este aplicativo web soluciona ese problema al automatizar el proceso de selección de manera justa y transparente, evitando confusiones y asegurando que cada persona tenga un "amigo secreto" asignado.

El sistema permite a los usuarios:

* Registrar una lista de nombres de participantes.

* Realizar la selección aleatoria del amigo secreto de cada participante.

* Compartir los resultados de manera privada, evitando que los participantes descubran su "amigo secreto" antes de tiempo.

* Opción para reiniciar el proceso en caso de requerir una nueva asignación.

## 2. Funcionalidades del Proyecto

Al abrir el archivo index.html en el navegador web, se puede observar una caja de texto seguida del botón "Añadir" que es donde se van a registrar uno a uno los nombres de los participantes en el juego.  La función utilizada para el registro se detalla a continuación:

```javascript
function agregarAmigo(){
    // Obtiene el texto ingresado a través de la caja de texto identificada como "amigo"
    let nombreIngresado = document.getElementById('amigo').value;

    // Validamos que no esté vacía la caja de texto
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
```

Al darle click sobre el botón sortear amigo se ejecuta la siguiente función que retorna de forma aleatoria uno de los nombres ingresados en la lista de participantes:

```javascript
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
```

## 3. Técnicas y Tecnologías Utilizadas

La aplicación se basa en JavaScript para gestionar la lógica de selección y manipulación del DOM. Se puede implementar en cualquier servidor estático o integrar con backend si se desea almacenamiento persistente.

Este proyecto es ideal para quienes buscan una solución rápida y efectiva para organizar su intercambio de regalos, ya sea en Navidad, cumpleaños o cualquier otra ocasión especial.

JavaScript (ES6+) para la lógica del aplicativo.

HTML5 y CSS3 para la estructura y diseño de la interfaz.

## 4. Acceso al Proyecto

Para acceder al código del proyecto es muy fácil, tan solo se debe hacer click [aquí](https://github.com/Jairespe/challenge-amigo-secreto.git) para acceder al repositorio en GitHub desde donde se puede ver los directorios y archivos requeridos para el funcionamiento del aplicativo:

```
CHALLENGE-AMIGO-SECRETO/
│
├── assets/
│   ├── amigo-secreto.png
│   ├── play_circle_outline.png
│   app.js
│   index.html
│   README.md
│   style.css
```

## 5. Abrir y Ejecutar el Proyecto

Para ejecutar el proyecto, se debe descargar la carpeta de forma local y abrir el archivo index.html en el navegador de se preferencia.



Este repositorio está abierto a contribuciones, mejoras y nuevas funcionalidades. ¡Síguenos y colabora para hacer de este proyecto una mejor experiencia para todos!

