function modTamaño() {
  let tam = document.getElementsByTagName("table")[0];

  // Mostramos por consola el tamaño actual de la altura y el ancho
  console.log("La altura es: " + tam.getAttribute("height"));
  console.log("El ancho es: " + tam.getAttribute("width"));

  // Le pedimos al usuario los datos de la altura y el ancho
  let altura = parseInt(prompt("Introduce un numero para la altura: "));
  let ancho = parseInt(prompt("Introduce un numero para el ancho: "));

  // Aplicamos los datos introducidos por el usuario
  tam.setAttribute("height", altura);
  tam.setAttribute("width", ancho);
}

function modBorde() {
  let tamBorde = document.getElementsByTagName("table")[0];

  // Mostramos por consola el tamaño actual del borde
  console.log("La altura es: " + tamBorde.getAttribute("border"));

  // Le pedimos al usuario el dato del borde
  let borde = parseInt(prompt("Introduce un numero para la altura: "));

  // Aplicamos los datos introducidos por el usuario
  tamBorde.setAttribute("border", borde);
}
