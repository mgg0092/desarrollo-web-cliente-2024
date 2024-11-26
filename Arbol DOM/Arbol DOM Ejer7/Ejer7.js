window.onload = function () {
  let colores = ["red", "yellow", "pink", "white", "brown", "black"];
  let celdas = document.querySelectorAll("td");
  for (const celda of celdas) {
    celda.onclick = function () {
      if (celda.style.backgroundColor === colores[0]) {
        celda.style.backgroundColor = colores[1];
      } else if (celda.style.backgroundColor === colores[1]) {
        celda.style.backgroundColor = colores[2];
      } else if (celda.style.backgroundColor === colores[2]) {
        celda.style.backgroundColor = colores[3];
      } else if (celda.style.backgroundColor === colores[3]) {
        celda.style.backgroundColor = colores[4];
      } else if (celda.style.backgroundColor === colores[4]) {
        celda.style.backgroundColor = colores[5];
      } else {
        celda.style.backgroundColor = colores[0];
      }
    };
  }
};
