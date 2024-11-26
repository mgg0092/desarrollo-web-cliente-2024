let timer;
let contador = 0;

window.onload = function () {
  document.getElementsByTagName("button")[0].onclick = function () {
    //TIMER
    //setInterval

    timer = setInterval(function () {
      let dedo = document.querySelector("div");
      contador++;
      dedo.innerHTML = contador;
    }, 500);

    this.disabled = true;
  };

  document.getElementsByTagName("button")[1].onclick = function () {
    clearInterval(timer);

    document.getElementsByTagName("button")[0].disabled = false;
  };

  // setTimeOut
  clearTimeout;
};
