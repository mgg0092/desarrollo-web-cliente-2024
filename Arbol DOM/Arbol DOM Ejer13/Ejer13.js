window.onload = function () {
  let imagen = document.getElementsByTagName("img")[0];

  imagen.onclick = function () {
    let estilos = window.getComputedStyle(img);
    let filtro = estilos.getPropertyValue("filter");
    img.style.setProperty("filter", "blur:" + 0);
  };
};
