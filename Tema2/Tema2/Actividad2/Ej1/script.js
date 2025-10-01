function compararCadenas() {

    var seguir = true;
    while (seguir){
        
    alert("Esto es un programa para comparar cadenas ")
    var cad1 = prompt("Digame una frase")
    var cad2 = prompt("Digame una fras")

    cad1= cad1.trim();
    cad2= cad2.trim();

   
    //modo clasico
    /*
    if(cad1 == cad2){
        alert("Las cadenas son iguales")
    }else{
        alert("Las cadenas son diferentes")
    }

    */
    const comparar = (cad1, cad2) => cad1 === cad2 
    ? alert("Las cadenas son iguales") 
    : alert("Las cadenas son diferentes");

    comparar(cad1,cad2)
    

    var res=confirm ("¿Quieres repetir?")
    if (res){
        seguir == true;
        
    }else{
        alert("Gracias por jugar")
        break
    }
}

}
compararCadenas()