function calcularDobles(numero, veces = 3) {
  console.log("Número inicial: " + numero);
  console.log("Número de veces: " + veces);
  let valor = numero;
  for (let i = 1; i <= veces; i++) {
    valor = valor * 2;
    console.log("Doble " + i + ": " + valor);
  }
}

let num = parseInt(prompt("Introduce un número:"));
let veces = prompt("¿Cuántas veces quieres calcular el doble? (opcional, dejar vacío = 3)");

if (veces === "" || veces === null) {
  calcularDobles(num);
} else {
  calcularDobles(num, parseInt(veces));
}
