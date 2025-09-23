function jugar() {
  let numeroSecreto = Math.floor(Math.random() * 11);
  let intentos = 0;
  let seguirJugando = true;

  while (seguirJugando) {
    let entrada = prompt("Del 1 al 10... ¿Qué número entero crees que estoy pensando?");
    
    // Caso: usuario cancela o deja vacío
    if (entrada === null || entrada.trim() === "") {
      let continuar = confirm("El dato no es válido o has cancelado. ¿Quieres seguir jugando?");
      if (!continuar) return; // salir del juego
      else continue; // no cuenta intento
    }

    // Intentamos parsear a entero
    let numero = parseInt(entrada);

    // Caso: no es un número o está fuera de rango
    if (isNaN(numero) || numero < 0 || numero > 10) {
      alert("El dato introducido NO es válido. Se pide un número del 0 al 10.");
      continue; // no cuenta intento
    }

    // Aquí sí cuenta como intento
    intentos++;

    // Comprobamos el número
    if (numero === numeroSecreto) {
      alert("¡Enhorabuena! Has acertado, el número era " + numeroSecreto + 
            "\nLo has adivinado en " + intentos + " intentos.");

      seguirJugando = confirm("¿Quieres volver a jugar?");
      if (seguirJugando) {
        numeroSecreto = Math.floor(Math.random() * 11); // nuevo número
        intentos = 0;
      } else {
        seguirJugando = false;
      }
    } else if (numero < numeroSecreto) {
      alert("Estás cerca, mi número es mayor. Llevas " + intentos + " intentos.");
    } else {
      alert("Estás cerca, mi número es menor. Llevas " + intentos + " intentos.");
    }
  }
}

// Ejecutar el juego al cargar
jugar();
