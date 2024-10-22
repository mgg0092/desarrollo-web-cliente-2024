let Matriz = [[1], [3], [4], [5], [3], [8], [9], [2], [7]];

function elementoRepetido(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      if (matriz[i][j] === matriz[i][j]) return true;
    }
  }
  return false;
}

console.log(elementoRepetido(Matriz));
