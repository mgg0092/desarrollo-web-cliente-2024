// Apartado A
function rellenarMatriz() {
  let Matriz = [];
  for (let i = 0; i < 3; i++) {
    Matriz[i] = [];
    for (let j = 0; j < 3; j++) {
      Matriz[i][j] = Math.floor(Math.random() * 20) + 2;
    }
  }
  return Matriz;
}

// Apartado B
function mostrarMatriz(Matriz) {
  for (let i = 0; i < Matriz.length; i++) {
    let tmp = "";
    for (let j = 0; j < Matriz.length; j++) {
      if (Matriz[i][j] < 10) {
        tmp += "0" + Matriz[i][j] + " " + "\t";
      } else {
        tmp += Matriz[i][j] + " " + "\t";
      }
    }
    console.log(tmp);
  }
}

// Apartado C
function mostrarSuma(Matriz) {
  let Suma = 0;
  for (let i = 0; i < Matriz.length; i++) {
    for (let j = 0; j < Matriz.length; j++) {
      Suma = Matriz[i][j] + Suma;
    }
  }
  console.log(`La suma de los numeros del Array es: ${Suma}`);
}

// Apartado D
function copiarMatriz(Matriz) {
  let Copia = Matriz;
  for (let i = 0; i < Copia.length; i++) {
    for (let j = 0; j < Copia.length; j++) {
      if (Matriz[i][j] >= 10) {
        Copia[i][j] = 9;
      } else {
        Copia[i][j] = Matriz[i][j];
      }
    }
  }
  return Copia;
}

// Apartado E (No funciona debia a que el Array de Copia apunta a la misma Matriz)
function intercambiar(Matriz, Copia) {
  let Num = null;
  do {
    Num = Number(prompt("Introduce la fila a intercambiar: "));
  } while (Num < 0 && Num > 3);

  [Copia[Num][0]] = [Matriz[Num][0]];

  console.log("Mostrar Filas Intercambiadas");
  mostrarMatriz(Matriz);
  console.log("-----------------------");
  mostrarMatriz(Copia);
}

function ejercicio4() {
  let Matriz = rellenarMatriz();

  mostrarMatriz(Matriz);

  mostrarSuma(Matriz);

  let Copia = copiarMatriz(Matriz);

  mostrarMatriz(Copia);

  intercambiar(Matriz, Copia);
}
