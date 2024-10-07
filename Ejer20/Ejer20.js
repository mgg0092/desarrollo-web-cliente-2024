/* Crea un script que simule el siguiente juego:
En un tablero, NxM la maquina colocará de forma aleatoria varias minas y un tesoro. El
usuario intentará averiguar la posición del tesoro indicando la posición del tablero que
quiere mirar. Podrá seguir jugando mientras no encuentre una de las minas (muere) o el
tesoro (gana).
Para este ejercicio usa un tablero de 4x5 con 3 minas.
Hay que asegurarse que tanto las minas como el tesoro no se colocan en posiciones ya
ocupadas.
En cada iteración del juego se pintará el tablero y se preguntará al usuario qué
coordenadas quiere mostrar del tablero.
Usa la consola para pintar el tablero de la siguiente forma:
• Si una coordenada aún no ha sido visitada, pinta un *
• Si una coordenada ha sido visitada y no tiene nada, pinta un _
• Si una coordenada ha sido visitada y tiene una mina, pinta una X (y mata al
jugador)
• Si una coordenada ha sido visitada y tiene el tesoro, pinta un € (y el jugador
gana)
Puedes pedir al usuario las coordenadas como quieras: ambos valores de golpe o de uno
en uno. Lo único a tener en cuenta es que, para el usuario, las coordenadas empiezan en
1, no en 0.
Mejora: si hay una mina a una casilla de distancia de la posición que ha descubierto el
usuario, muestra un aviso indicando que tenga cuidado (pero no reveles la posición de la
mina) */

// Variables
const filas = 4;
const columnas = 5;
const minas = 3;

// Tablero
let tablero = [];
let tableroDelUsuario = [];

for (let i = 0; i < filas; i++) {
  tablero[i] = [];
  tableroDelUsuario[i] = [];
  for (let j = 0; j < columnas; j++) {
    tablero[i][j] = "";
    tableroDelUsuario[i][j] = "▢";
  }
}

function generarNumAle(limite) {
  return Math.floor(Math.random() * limite);
}

function generarMinaYTesoro() {
  let ocupadas = Set(); // Set() nos permite almacenar valores unicos de cualquier tipo

  while (ocupadas.size < minas) {
    let fila = generarNumAle(filas);
    let columna = generarNumAle(columnas);
    let clave = "$fila,$columna";
    if (!ocupadas.has(clave)) {
      // Nos comprueba que el elemento existe en el objeto Set()
      tablero[fila][columna] = "X";
      ocupadas.add(clave);
    }
  }

  let filaTesoro, columnaTesoro;
  do {
    filaTesoro = generarNumAle(filas);
    columnaTesoro = generarNumAle(columnas);
  } while (tablero[filaTesoro][columnaTesoro] === "X");

  tablero[filaTesoro][columnaTesoro] = "€";
}

generarMinaYTesoro();

function mostrarTablero() {
  console.clear();
  for (let i = 0; i < filas; i++) {
    console.log(tableroDelUsuario[i].join(" "));
  }
}

function hayMinaCerca(fila, columna) {
  const direcciones = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];

  for (const [dx, dy] of direcciones) {
    const nuevaFila = fila + dx;
    const nuevaColumna = columna + dy;
    if (
      nuevaFila >= 0 &&
      nuevaFila < filas &&
      nuevaColumna >= 0 &&
      nuevaColumna < columnas &&
      tablero[nuevaFila][nuevaColumna] === "X"
    ) {
      return true;
    }
  }
  return false;
}

function jugarTurno() {
  mostrarTablero();

  const filaUsuario =
    parseInt(prompt(`Introduce el número de fila (1-${filas}):`)) - 1;
  const columnaUsuario =
    parseInt(prompt(`Introduce el número de columna (1-${columnas}):`)) - 1;

  if (
    filaUsuario < 0 ||
    filaUsuario >= filas ||
    columnaUsuario < 0 ||
    columnaUsuario >= columnas
  ) {
    console.log("Coordenadas fuera de rango. Intenta nuevamente.");
    return true;
  }

  if (tablero[filaUsuario][columnaUsuario] === "X") {
    tableroDelUsuario[filaUsuario][columnaUsuario] = "X";
    mostrarTablero();
    console.log("Has encontrado una mina. ¡Has muerto!");
    return false;
  } else if (tablero[filaUsuario][columnaUsuario] === "€") {
    tableroDelUsuario[filaUsuario][columnaUsuario] = "€";
    mostrarTablero();
    console.log("¡Has encontrado el tesoro! ¡Has ganado!");
    return false;
  } else {
    tableroDelUsuario[filaUsuario][columnaUsuario] = "_";
    if (hayMinaCerca(filaUsuario, columnaUsuario)) {
      console.log("¡Cuidado! Hay una mina cerca.");
    }
    return true;
  }
}

function Jugar() {
  let jugando = true;

  while (jugando) {
    jugando = jugarTurno();
  }
}
