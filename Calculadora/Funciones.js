function recogerNumero(Cadena) {
  let num;
  do {
    num = parseInt(prompt("Introduce un " + Cadena + ": "));
  } while (isNaN(num));
  return num;
}

function Sumar(x, y) {
  return x + y;
}

function Restar(x, y) {
  return x - y;
}

function Multiplicar(x, y) {
  return x * y;
}

function Dividir(x, y) {
  return x / y;
}

function RecogerOperacion() {
  let Resultado;
  let Operacion;
  let n1 = recogerNumero("numero");
  let n2 = recogerNumero("numero");
  Operacion = prompt(
    "Introduce la operacion (Sumar, Restar, Multiplicar o Dividir): "
  );

  switch (Operacion) {
    case "Sumar":
      Resultado = Sumar(n1, n2);
      alert(Resultado);
      break;
    case "Restar":
      Resultado = Restar(n1, n2);
      alert(Resultado);
      break;
    case "Multiplicar":
      Resultado = Multiplicar(n1, n2);
      alert(Resultado);
      break;
    case "Dividir":
      Resultado = Dividir(n1, n2);
      alert(Resultado);
  }
}

function Principal() {
  RecogerOperacion();
}
