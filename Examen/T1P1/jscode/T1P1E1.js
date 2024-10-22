function ejercicio1() {
  let dinero = 0;
  let dineroConvertido = 0;
  do {
    dinero = Number(prompt("Introduce una cantidad de €: "));
  } while (dinero < 0);

  dineroConvertido = dinero * 1.0965;

  alert(`${dinero} euros equivalen a ${dineroConvertido} dolares americanos`);
}
