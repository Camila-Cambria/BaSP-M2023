console.log ('EXERCISE 1: VARIABLES AND OPERATORS');

/* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de
ambos números en una 3er variable. */

console.log ('Exercise 1-a');
var num1,num2,suma;
num1=10;
num2=4;
suma= num1 + num2;
console.log ('La suma es de: ' + suma);

/* b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable. */

console.log ('Exercise 1-b');
var nombre,apellido,nombreCompleto;
nombre= 'Camila';
apellido= 'Cambria';
nombreCompleto= nombre + ' ' + apellido;
console.log ('Yo soy ' + nombreCompleto);

/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
 guardando el resultado de la suma en una 3er variable (utilizar length)*/

console.log ('Exercise 1-c');
var nombre,apellido,sumaCompleto;
sumaCompleto= nombre.length +apellido.length;
console.log ('La cantidad de letras es de: '+ sumaCompleto);
