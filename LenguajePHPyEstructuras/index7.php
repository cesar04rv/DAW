<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php
// Single block program for a dynamic menu

// Ask for number of options
echo "Introduce el número de opciones del menú: ";
$numOpciones = (int)trim(fgets(STDIN));

// Ask for character to identify options
echo "Introduce el carácter a usar para identificar las opciones (p. ej. número o letra): ";
$caracter = trim(fgets(STDIN));

// Ask for text of each option
$opciones = [];
for ($i = 1; $i <= $numOpciones; $i++) {
    echo "Introduce el texto para la opción $i: ";
    $opciones[$i] = trim(fgets(STDIN));
}

// Ask for termination character
echo "Introduce el carácter de terminación para salir del menú: ";
$terminar = trim(fgets(STDIN));

do {
    // Print menu
    echo "\n--- MENÚ ---\n";
    foreach ($opciones as $indice => $texto) {
        echo "$caracter$indice. $texto\n";
    }
    echo "$terminar. Salir\n";

    // Ask for choice
    echo "Elige una opción: ";
    $eleccion = trim(fgets(STDIN));

    // Check termination
    if ($eleccion === $terminar) {
        echo "Programa terminado.\n";
        break;
    }

    // Display chosen option if valid
    if (array_key_exists((int)$eleccion, $opciones)) {
        echo "Has elegido la opción: " . $opciones[(int)$eleccion] . "\n";
    } else {
        echo "Opción no válida.\n";
    }

} while (true);
?>


</body>
</html>