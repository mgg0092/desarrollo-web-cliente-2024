window.onload = () => {
  let boton = document.getElementsByName("Boton")[0];
  let boton2 = document.getElementsByName("Boton")[1];

  boton.onclick = () => {
    let Dolar = document.getElementsByName("Dolar")[0];
    let InputConver = document.getElementsByName("Convercion")[0];

    let MonedaConver = Dolar.value * 0.95;

    InputConver.value = MonedaConver;
  };

  boton2.onclick = () => {
    let Euro = document.getElementsByName("Euro")[0];
    let InputConver = document.getElementsByName("Convercion")[1];

    let MonedaConver = Euro.value * 1.05;

    InputConver.value = MonedaConver;
  };
};
