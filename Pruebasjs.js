/* Ejemplos videos */
alert("Bienvenidos a la página"); // Muestra un mensaje en una ventana emergente
console.log("Hola Mundo"); // Muestra un mensaje en la consola del navegador

var nombre = "Valen"; // Declara una variable llamada nombre y le asigna el valor "Juan"
/* console.log(nombre); */ // Muestra el valor de la variable nombre en la consola del navegador

nombre = 'Valentina'; // Cambia el valor de la variable nombre a "Valentina", se pueden usar comillas dobles o simples.
console.log(nombre); // Muestra el nuevo valor de la variable nombre en la consola del navegador

/* Variables con lets, es una variable local pero no se puede modificar en el mismo bloque, permite definir variables limitando su alcance al bloque*/

var numero = 5; // Declara una variable llamada numero y le asigna el valor 5


if (true) { // Si la condición es verdadera
    var numero = 10; // Declara una variable llamada numero y le asigna el valor 10 (diferente al anterior)
    alert(numero); // Muestra el valor de la variable numero en una ventana emergente (10)
}
    console.log(numero); // Muestra el valor de la variable numero en la consola del navegador (10)

let texto = "Aprendiendo JS"; // Declara una variable llamada texto y le asigna el valor
console.log(texto); // Muestra el valor de la variable texto en la consola del navegador

if (true) { // Si la condición es verdadera
    let texto = "Aprendiendo Java"; // Declara una variable llamada texto y le asigna el valor "Aprendiendo Java"
    console.log(texto); // Muestra el valor de la variable texto en la consola del navegador (Aprendiendo JS)
}

/* Constantes, un contenedor de datos similar a una variable, solo que el valor no se puede modificar */

const pi = 3.14; // Declara una constante llamada PI y le asigna el valor 3.14, no puede tener numeros, signos,espacios,etc. 
console.log(pi); // Muestra el valor de la constante PI en la consola del navegador