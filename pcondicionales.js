// Condicionales if
// si A es igual a B entonces haz algo

/* Sintaxis */
/* if (condition) {} */
        // instrucciones si la condición es verdadera


/* Operadores relacionales
mayor que: >
menor que: <
mayor o igual que: >=
menor o igual que: <=
asignación: =
igual que: ==
igual si o si: === tiene que ser igual el valor y el tipo de dato
diferente que: !=
*/

// Ejemplo 1
/* let nota =5;
if (nota >5) {
    alert("Aprobado")
} else {
    alert("Reprobado")
} */
// Ejemplo 2
// else if: especifica una condición adicional
/* 
if (condicion){
    
}else if (condicion2){

}else {

} */

let nota=Number (prompt("Introduce tu nota: "));

if (nota <5) {
    alert("Reprobado");
}else if (nota ==5) {
    alert("Aceptable pero puede mejorar");
}else if (nota ==6) {
    alert("Suficiente");
}else if (nota ==7) {
    alert("Bien");
}else {
    alert("Excelente, muy bien hecho");
}

// Operador lógico || or && and

/* Switch, validar un numero por medio de una expresion, si la expresión concide muestra el resultado correspondiente*/
/* Sintaxis */
/* switch (expresion) {
    case valor1:
        // instrucciones
        break;
    case valor2:
        // instrucciones
        break;
    default:
        // instrucciones
        break;
} */

        let dia = Number (prompt("Introduce un número del 1 al 7: "));
        let mensaje = "El día de la semana es: ";
        switch (dia) {
            case 1:
                mensaje += "Lunes";
                break;
            case 2:
                mensaje += "Martes";
                break;
            case 3:
                mensaje += "Miércoles";
                break;
            case 4:
                mensaje += "Jueves";
                break;
            case 5:
                mensaje += "Viernes";
                break;
            case 6:
                mensaje += "Sábado";
                break;
            case 7:
                mensaje += "Domingo";
                break;
            default:
                mensaje = "Número no válido, introduce un número del 1 al 7.";
                break;
        }

        alert(mensaje);
        console.log(mensaje);