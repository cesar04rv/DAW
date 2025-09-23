function calcularNuevoSalario() {
    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const salarioActual = parseFloat(document.getElementById("salario").value);
    const numHijos = parseInt(document.getElementById("hijos").value);
    const edad = parseInt(document.getElementById("edad").value);

    let nuevoSalario = salarioActual;

    // Condición 1: Menos de 1000€, menos de 30 años y tiene hijos
    if (salarioActual < 1000 && edad < 30 && numHijos > 0) {
        nuevoSalario = 1200;
    } 
    // Si no tiene hijos, subida del 5%
    else if (salarioActual < 1000 && edad < 30 && numHijos === 0) {
        nuevoSalario = salarioActual * 1.05;
    } 
    // Condición 2: Entre 30 y 45 años
    else if (edad >= 30 && edad <= 45) {
        // Si gana menos de 1250 y tiene más de 1 hijo
        if (salarioActual < 1250 && numHijos > 1) {
            nuevoSalario = salarioActual * 1.10;
        }
        // Si es familia numerosa (3 o más hijos) y gana menos de 1250
        else if (salarioActual < 1250 && numHijos >= 3) {
            nuevoSalario = salarioActual * 1.15;
        }
    } 
    // Condición 3: Más de 45 años
    else if (edad > 45) {
        // Aumento del 15% si el salario es menor a 2000€
        if (salarioActual < 2000) {
            nuevoSalario = salarioActual * 1.15;
        }
    }

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = 
        `${nombre}, tu salario actual es ${salarioActual.toFixed(2)}€ y tu nuevo salario es ${nuevoSalario.toFixed(2)}€.`;
}
