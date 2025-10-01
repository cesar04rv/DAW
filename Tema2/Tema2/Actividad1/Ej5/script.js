function esPrimo(num) {
  if (num <= 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function ejecutarOpcion() {
  const opcion = document.getElementById("opcion").value;

  if (opcion === "1") {
    const numero = prompt("Dame un número:");
    const num = parseInt(numero);

    if (isNaN(num)) {
      alert("Por favor, introduce un número válido.");
      return;
    }

    if (esPrimo(num)) {
      alert(`El número ${num} Es primo`);
    } else {
      alert(`El número ${num} No es primo`);
    }

  } else if (opcion === "2") {
    const numero = prompt("Dame un número:");
    const num = parseInt(numero);

    if (isNaN(num)) {
      alert("Por favor, introduce un número válido.");
      return;
    }

    let contador = 0;

    for (let i = 1; i <= num; i++) {
      if (esPrimo(i)) {
        console.log(`El número ${i} es primo`);
        contador++;
      }
    }

    console.log(`Entre el número 1 y ${num} hay ${contador} números primos.`);

  } else {
    alert("Por favor, introduce una opción válida: 1 o 2.");
  }
}
