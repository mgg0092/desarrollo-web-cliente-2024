// Apartado A
function pedirNumero() {
  let numero;
  let i = 0;
  let ArrayNum = [];
  do {
    numero = Number(prompt("Introduce un numero (Negativo para salir): "));
    if (numero >= 0) {
      ArrayNum[i] = numero;
      i++;
    }
  } while (numero > 0);
  return ArrayNum;
}

// Apartado B
function mostrarNum(ArrayNum) {
  for (let i = 0; i < ArrayNum.length; i++) {
    console.log(`${ArrayNum[i]} `);
  }
}

// Apartado C
function mostrarSuma(ArrayNum) {
  let Suma = 0;
  for (let i = 0; i < ArrayNum.length; i++) {
    Suma = ArrayNum[i] + Suma;
  }
  console.log(`La suma de los numeros del Array es: ${Suma}`);
}

// Apartado D
function perdirSegundoNum() {
  let numero;
  do {
    numero = parseInt(prompt("Introduce un numero (Entero y Positivo): "));
  } while (numero <= 0);

  return numero;
}

// Apartado E
function primeraYUltimaPos(numero, ArrayNum) {
  primeraVez = false;
  for (let i = 0; i < ArrayNum.length; i++) {
    if (!primeraVez && numero === ArrayNum[i]) {
      console.log(`La primera posicion es: ${i}`);
      primeraVez = true;
    } else if (numero === ArrayNum[i]) {
      console.log(`La ultima posicion es: ${i}`);
    }
  }
}

function ejercicio3() {
  let ArrayNumeros = pedirNumero();

  mostrarNum(ArrayNumeros);

  mostrarSuma(ArrayNumeros);

  let numeroBuscar = perdirSegundoNum();

  primeraYUltimaPos(numeroBuscar, ArrayNumeros);
}
