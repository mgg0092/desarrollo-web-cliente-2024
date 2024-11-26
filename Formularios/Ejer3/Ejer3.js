window.onload = () => {
  let checkboxs = document.getElementsByName("Aficiones");
  let labels = document.querySelectorAll("label");
  let textarea = document.querySelector("textarea");
  let boton = document.getElementsByName("boton")[0];

  boton.onclick = () => {
    let texto = "";
    for (let i = 0; i < checkboxs.length; i++) {
      if (checkboxs[i].checked) {
        texto += labels[i].textContent;
      }
    }
    textarea.textContent = texto;
  };
};
