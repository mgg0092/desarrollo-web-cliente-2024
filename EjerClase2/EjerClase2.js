function Matrices() {
  let Matriz = [];
  let tam;
  tam = Number(prompt("Introduce el tamaño de la matriz: "));
  for (let i = 0; i < tam; i++) {
    Matriz[i] = [];
    for (let j = 0; j < tam; j++) {
      Matriz[i][j] = Math.floor(Math.random() * (tam * 2)) + tam;
    }
  }

  // Caso A)
  let mayor = Matriz[0][0];

  for (let i = 0; i < tam; i++) {
    for (let j = 0; j < tam; j++) {
      if (Matriz[i][j] > mayor) {
        mayor = Matriz[i][j];
      }
    }
  }
  console.log("Este es el numero mayor: " + mayor);

  // Caso B)
  for (let i = 0; i < tam; i++) {
    let tmp = "";
    for (let j = 0; j < tam; j++) {
      tmp += Matriz[i][j] + " " + "\t";
    }
    console.log(tmp);
  }

  // Caso C)
  let suma = 0;
  for (let i = 0; i < tam; i++) {
    for (let j = 0; j < tam; j++) {
      suma += Matriz[i][j];
    }
  }
  console.log("La suma de todos los elemento es: " + suma);

  // Caso D)
  for (let i = 0; i < tam; i++) {
    for (let j = 0; j < tam; j++) {
      if (Matriz[i][j] % 3 == 0) {
        Matriz[i][j] = "Fizz";
      }
      elseif(Matriz[i][j] % 5 == 0);
      {
        Matriz[i][j] = "Buzz";
      }
      elseif(Matriz[i][j] % 3 == 0 && Matriz[i][j] % 5 == 0);
      Matriz[i][j] = "FizzBuzz";
    }
  }
}
