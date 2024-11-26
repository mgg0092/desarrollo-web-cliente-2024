window.onload = () => {
  let input1 = document.querySelectorAll("input")[0];
  let input2 = document.querySelectorAll("input")[1];

  input1.onkeyup = () => {
    input2.value = input1.value;
  };
};
