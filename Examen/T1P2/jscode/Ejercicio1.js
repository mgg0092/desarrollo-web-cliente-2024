let timer;
window.onload = () => {
  let bGenerar = document.getElementsByClassName("botones")[0];
  let bComparar = document.getElementsByClassName("botones")[1];
  let divIzq = document.getElementsByTagName("div")[0];
  let divDer = document.getElementsByTagName("div")[1];
  let divSalida = document.getElementsByTagName("div")[2];

  bGenerar.onclick = () => {
    timer = setInterval(() => {
      divIzq.textContent = Math.floor(Math.random() * (50 - 1 + 1) + 1);
      divDer.textContent = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    }, 1000);
    divSalida.textContent = "";
    bGenerar.disabled = true;
    bComparar.disabled = false;
  };

  bComparar.onclick = () => {
    clearInterval(timer);
    let valorIzq = parseInt(divIzq.textContent);
    let valorDer = parseInt(divDer.textContent);

    if (valorIzq > valorDer) {
      divSalida.textContent = valorIzq;
      bComparar.disabled = true;
      bGenerar.disabled = false;
    } else {
      divSalida.textContent = valorDer;
      bComparar.disabled = true;
      bGenerar.disabled = false;
    }
  };
};
