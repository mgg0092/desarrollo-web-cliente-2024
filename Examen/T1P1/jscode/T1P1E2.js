function ejercicio2() {
  let contadorSuspensos = 0;
  let contadorAprobados = 0;
  let contadorNotables = 0;
  let contadorsobresaliente = 0;

  for (let i = 0; i <= 10; i++) {
    let nota = pedirNota();

    if (nota < 5) {
      contadorSuspensos++;
    } else if (nota >= 5 && nota <= 6) {
      contadorAprobados++;
    } else if (nota >= 7 && nota <= 8) {
      contadorNotables++;
    } else {
      contadorsobresaliente++;
    }
  }

  console.log(`Cantidad de Suspensos: ${contadorSuspensos}`);
  console.log(`Cantidad de Aprobados: ${contadorAprobados}`);
  console.log(`Cantidad de Notables: ${contadorNotables}`);
  console.log(`Cantidad de Sobresalientes: ${contadorsobresaliente}`);
}

function pedirNota() {
  let nota;
  do {
    nota = Number(prompt("Introduce una nota (debe ser entre 0 y 10): "));
  } while (nota < 0 && nota > 10);
  return nota;
}
