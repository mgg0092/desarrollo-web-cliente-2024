window.onload = function () {
  let listaDivs = document.getElementsByTagName("div");

  for (const divito of listaDivs) {
    // Para cada DIV, le pongo su manejador de evento
    divito.onmouseover = function () {
      // Obtengo el estilo de cada elemento
      let estilos = window.getComputedStyle(this);
      let color = estilos.getPropertyValue("background-color");

      document.body.style.backgroundColor = color;
      // document.body.style.setProperty("background-color", color);
    };
  }
};
