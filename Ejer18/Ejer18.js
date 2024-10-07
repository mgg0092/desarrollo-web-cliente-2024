/* Ejercicio 18: Un restaurante nos ha encargado una aplicación para colocar a los clientes
en sus mesas. En una mesa se pueden sentar de 0 (mesa vacía) a 4 comensales (mesa
llena).
El funcionamiento es el siguiente:
Cuando llega un cliente se le pregunta cuántos son. Como el programa no está
preparado para colocar a grupos mayores a 4, si un cliente solicita una mesa con mas
comensales (pej, 6), el programa dará el mensaje “Lo siento, no admitimos grupos de 6,
haga grupos de 4 personas como máximo e intente de nuevo” y volverá a preguntar.
Para cada grupo nuevo que llega, se busca siempre la primera mesa libre (con 0
personas). Si no quedan mesas libres, se busca una donde haya hueco para todo el grupo
(por ejemplo si el grupo es de dos personas, se podrá colocar en mesas donde haya una
o dos personas).
Cada vez que se sientan nuevos clientes se debe mostrar el estado de las mesas.
Los grupos no se pueden romper aunque haya huecos sueltos suficientes.
A tener en cuenta:
• El programa comienza pidiendo el numero de mesas que tiene el restaurante.
• Inicialmente, las mesas se cargan con valores aleatorios entre 0 y 4 y mostrará
por pantalla como quedan las mesas inicialmente.
• El programa seguirá pidiendo comensales hasta que se introduzca un valor
negativo. */

function generarNumAle(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function crearMesas(numMesas) {
  let mesas = [];
  for (let i = 0; i < numMesas; i++) {
    mesas[i] = 0;
  }
  return mesas;
}

function mostrarMesas(mesas) {
  console.log("Estado actual de las mesas:");
  for (let i = 0; i < mesas.length; i++) {
    console.log(`Mesa ${i + 1}: ${mesas[i]} clientes`);
  }
}

function sentarClientes(mesas, nClientes) {
  for (let i = 0; i < mesas.length; i++) {
    if (mesas[i] === 0 && nClientes <= 4) {
      mesas[i] = nClientes;
      console.log(`Sentados en la mesa ${i + 1}.`);
      return true;
    }
  }

  for (let i = 0; i < mesas.length; i++) {
    if (mesas[i] + nClientes <= 4) {
      mesas[i] += nClientes;
      console.log(`Sentados en la mesa ${i + 1}.`);
      return true;
    }
  }

  console.log("Lo siento, no hay espacio disponible para su grupo.");
  return false;
}

function gestionarRestaurante() {
  const numMesas = parseInt(prompt("Introduce el numero de mesas: "));
  let mesas = crearMesas(numMesas);

  mostrarMesas(mesas);

  while (true) {
    const numClientes = parseInt(
      prompt(
        "¿Cuántos comensales son? (Introduce un número negativo para salir):"
      )
    );

    if (numClientes < 0) {
      console.log("Gracias por usar el sistema. ¡Hasta pronto!");
      break;
    }

    if (numClientes > 4) {
      console.log(
        "Lo siento, no admitimos grupos de más de 4 personas. Haga grupos más pequeños e intente de nuevo."
      );
      continue;
    }
    sentarClientes(mesas, numClientes);

    mostrarMesas(mesas);
  }
}
