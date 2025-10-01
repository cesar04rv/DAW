function rellenarTabla() {
    const nombre = document.getElementById("nombre").value;
    const filas = parseInt(document.getElementById("filas").value);
    const columnas = parseInt(document.getElementById("columnas").value);
    console.log(filas);
    console.log(columnas);
    console.log(nombre);

    var table = document.getElementById("tabla");
    var tbdy = document.createElement('tbody');

    // Crear las filas y las columnas
    for (let i = 0; i < filas; i++) {  
        var row = document.createElement('tr');  // Crear una fila por cada iteración
        for (let j = 0; j < columnas; j++) {  
            var cell = document.createElement('td');  // Crear una celda
            cell.innerHTML = nombre;  // Asignar el nombre al contenido de la celda
            row.appendChild(cell);  // Agregar la celda a la fila
        }
        tbdy.appendChild(row);  // Agregar la fila al tbody
    }

    table.appendChild(tbdy);  // Agregar el tbody a la tabla
}



