//SPREAD OPERATOR [...
let a, b, c, otros;
let lista = [23, 56, 78, 9, 0, 4, 6];
[a, b, c, ...otros] = lista;

let otra = [...lista];
otra[0] = 67;

let res = lista.concat(6, 7, 8, 9);
// res = lista.concat(otra);

// Intercambiar posicion
[lista[1], lista[4]] = [lista[4], lista[1]];

// Meter
// res.push("flipao");
// res.unshift("Por delante");

// Sacar
// let ultimo = res.pop();
// let primero = res.shift();

// res.reverse();

// let salida = res.join("-");

// Funcion Anonima
// let okey = res.some(function mayorEdad(edad) {
//    return edad > 8;
//  });

// res.forEach(function (ele) {
//  if (ele % 2 == 0) console.log("es par");
//  else console.log("es impar");
// });

// Funcion Flechas
const ok = res.every((edad) => edad > -8);

res.forEach((ele) => {
  if (ele % 2 == 0) console.log("es par");
  else console.log("es impar");
});

let otro = res.map((ele) => {
  if (ele % 2 !== 0) return ele;
  else return ele * 2;
});

function paco() {
  return [4, 9];
}

let posx, posy;
[posx, posy] = paco();

// Salida en consola
console.log(otra);

// console.log(salida);

console.log(res);
