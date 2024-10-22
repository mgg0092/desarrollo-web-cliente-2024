/* Ejercicio 7: Crea una función que reciba un array de valores enteros (positivos y
negativos), y devuelva otro array con la suma parcial de cada elemento del array que se
pasa como parámetro.
Nota: La suma parcial de un elemento del array será la suma de ese elemento y todos los anteriores a él.
Ej: Para el array [1,2,3,4,5,6], el array resultante será [1,3,6,10,15,21] */

tam = parseInt(prompt("Ingrese el tamaño del array: "));
var Array1 = [tam];

var Array2 = [tam];

for (let i = 0; i < tam; i++) {
  Array1[i] = parseInt(prompt("Ingrese los valores del array: "));
}

function DevolverArray() {
  for (let i = 0; i < tam; i++) {
    if (Array1[i - 1] != 0) {
      Array2 = Array1[i] + Array1[i - 1];
      console.log(Array2[i]);
    }
  }
}
