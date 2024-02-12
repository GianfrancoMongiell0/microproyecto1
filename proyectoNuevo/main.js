// sc// script.js
let contadorTurnos = 0;
const maxTurnos = 25;

const boton = document.getElementById('sacar-bola');
boton.addEventListener('click', () => {
    contadorTurnos++;
    boton.textContent = `Sacar bola (${contadorTurnos}/${maxTurnos})`;

    if (contadorTurnos === maxTurnos) {
        alert('¡Se han agotado los 25 turnos!');
        // Aquí puedes realizar otras acciones si lo deseas
    }
});


const sacarBolaButton = document.getElementById('sacar-bola');
const numeroBolaElement = document.getElementById('numero-bola-text'); // Elemento donde se mostrará el número
const respuestaText = document.getElementById("respuesta");

const maxBolas = 50;
const bolasDisponibles = Array.from({ length: maxBolas }, (_, i) => i + 1);

let bolasSacadas = 0;

sacarBolaButton.addEventListener('click', () => {
    if (bolasSacadas < maxBolas) {
        const indiceAleatorio = Math.floor(Math.random() * bolasDisponibles.length);
        const bolaSacada = bolasDisponibles.splice(indiceAleatorio, 1)[0];
        console.log(`Bola ${bolaSacada} sacada`);
        tacharNumero(bolaSacada);   
        respuestaText.textContent = `La bola que salio es la: ${bolaSacada}`;

        bolasSacadas++;

        // Mostrar el número de la bola en el elemento
        numeroBolaElement.textContent = bolaSacada;
    } else {
        console.log('No quedan más bolas en el dispensador.');
    }
});




function iniciarJuego() {
    //Ingresa a los jugadores y el tamanio del carton
    const jugador1 = document.getElementById('jugador1').value;
    const jugador2 = document.getElementById('jugador2').value;
    const jugador3 = document.getElementById('jugador3').value;
    const jugador4 = document.getElementById('jugador4').value;

    const tamanio = parseInt(document.getElementById('tamanio').value);

    if (!jugador1 || !jugador2 || !jugador3 || !jugador4 || isNaN(tamanio)) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    const player1 = document.getElementById("jugador11");
    player1.textContent = jugador1;
    generarCarton(tamanio, 'carton1');

    const player2 = document.getElementById("jugador22");
    player2.textContent = jugador2;
    generarCarton(tamanio, 'carton2');

    const player3 = document.getElementById("jugador33");
    player3.textContent = jugador3;
    generarCarton(tamanio, 'carton3');

    const player4 = document.getElementById("jugador44");
    player4.textContent = jugador4;
    generarCarton(tamanio, 'carton4');


}


function getRandomNumber() {
    return Math.floor(Math.random() * (50 - 1) + 1);
}

// Función para crear un cartón de bingo de tamaño n por n
function generarCarton(n, cartonId) {
    const carton = document.getElementById(cartonId);
    const numeros = new Set();

    while (numeros.size < n * n) {
        numeros.add(getRandomNumber(1, 50));
    }

    let casillaId = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const casilla = document.createElement('div');
            casilla.className = 'casilla';
            casilla.textContent = Array.from(numeros)[casillaId - 1];
            casillaId++;
            carton.appendChild(casilla);
        }
        carton.appendChild(document.createElement('br'));
    }
}



function tacharNumero(numero) {
    const celdas = document.querySelectorAll('.casilla');
    celdas.forEach((celda) => {
        if (celda.textContent === numero.toString()) {
            celda.classList.add('tachado');
        }
    });
}

