window.onload = () => {
  let bAñadir = document.querySelectorAll("input")[0];
  let bLimpiar = document.querySelectorAll("input")[1];

  bAñadir.onclick = () => {
    let imgIntroducida = prompt("Introduce la ruta de la imagen: ");
    let URL = "";
    if (imgIntroducida === "") {
      URL = "img/terra.jpg";
    } else {
      URL = "img/" + imgIntroducida;
    }

    let imagen = document.createElement("img");

    imagen.src = URL;

    imagen.setAttribute("class", "foto");

    let divContenedor = document.getElementsByTagName("div")[0];
    divContenedor.appendChild(imagen);
    bLimpiar.disabled = false;
  };

  bLimpiar.onclick = () => {
    let divPadre = document.querySelector("div");

    while (divPadre.firstChild) {
      divPadre.removeChild(divPadre.firstChild);
    }

    bLimpiar.disabled = true;
  };
};
