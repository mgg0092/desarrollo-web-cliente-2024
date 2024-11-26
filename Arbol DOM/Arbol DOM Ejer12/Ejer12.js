window.onload = function () {
  let botones = document.getElementsByTagName("button");

  for (const boton of botones) {
    boton.onclick = function () {
      mover(this);
    };
  }
};

function mover(boton) {
  let img = document.getElementsByTagName("img")[0];
  let estilos = window.getComputedStyle(img);
  let posicion = estilos.getPropertyValue("left");

  if (boton.textContent == "Izquierda")
    img.style.setProperty("left", posicion - 5 + "px");
  else img.style.setProperty("left", posicion + 5 + "px");
}
