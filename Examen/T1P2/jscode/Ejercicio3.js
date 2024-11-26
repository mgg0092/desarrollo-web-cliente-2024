window.onload = () => {
  let boton = document.getElementsByTagName("input")[0];

  boton.onclick = () => {
    let divPadre = document.getElementsByClassName("solucion")[0];
    let tabla = document.createElement("table");
    let tbody = document.createElement("tbody");

    do {
      nfilas = prompt("Introduce el numero de filas: ");
    } while (nfilas < 0 && nfilas > 10);
    do {
      nceldas = prompt("Introduce el numero de celdas: ");
    } while (nceldas < 0 && nceldas > 10);

    tabla.appendChild(tbody);
    for (let i = 0; i < nfilas; i++) {
      let tr = document.createElement("tr");
      tbody.appendChild(tr);
      for (let j = 0; j < nceldas; j++) {
        let td = document.createElement("td");
        td.appendChild(document.createTextNode(i + 1));
        tr.appendChild(td);
      }
    }

    tabla.setAttribute("class", "tabla");

    divPadre.appendChild(tabla);
  };
};
