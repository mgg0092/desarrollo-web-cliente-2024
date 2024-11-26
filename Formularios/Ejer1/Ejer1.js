window.onload = () => {
  let input1 = document.querySelectorAll("input")[0];
  let input2 = document.querySelectorAll("input")[1];
  let boton = document.querySelectorAll("input")[2];

  boton.onclick = (/*event necesario para el event.preventDefault() */) => {
    // event.preventDefault(); forma de que el boton no recarge la pagina
    input2.value = input1.value;
  };
};
