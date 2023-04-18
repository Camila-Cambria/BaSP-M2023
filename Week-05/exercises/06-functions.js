console.log ('EXERCISE 6: FUNCTIONS');

/* Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función
y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

console.log ('Exercise 6-a');
function sum(a, b) {
    return a + b;
}
var num1, num2, sum;
num1 = 8;
num2 = 4;
sum = sum(num1, num2);
console.log('The result is: '+ sum);

/* b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un
número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN
como resultado.*/

console.log('Exercise 6-b');

function newSum(a, b) {
    if (typeof a !== 'number' || typeof a !== 'number') {
        alert('One of the parameters is not a number');
        return NaN;
    }
    return a + b;
}
num1 = 5;
num2 = "red";
sum = newSum(num1, num2);
console.log('The result is: '+ sum);

/* c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número
entero.*/

console.log('Exercise 6-c');

function validateInterger(num) {
    return Number.isInteger(num);
}
var x = 5;
if (validateInterger(x)) {
    console.log(x + ' is an interger number');
}
else {
    console.log(x + ' is not an interger number');
}

/*d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que
valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el número
convertido a entero (redondeado).*/

console.log('Exercise 6-d');
function sumValidate(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('One of the parameters is not a number');
        return NaN;
    }
    if (!validateInterger(a)) {
        a = Math.round(a);
        alert('Parameter 1 has been rounded to ' + a);
    }
    if (!validateInterger(b)) {
        b = Math.round(b);
        alert('Parameter 2 has been rounded to ' + b);
    }
    return a + b;
}
num1 = 10.5;
num2 = 5;
sum = sumValidate(num1, num2);
console.log('The result is: '+ sum);

/*e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando
que todo siga funcionando igual que en el apartado anterior.*/

console.log('Exercise 6-e');
function roundNumber(a) {
    if (!validateInterger(a)) {
        a = Math.round(a);
        alert('The parameter has been rounded to ' + a);
    } else {
        alert('The parameter is an interger number, no rounding needed');
    }
    return a;
}
function newSumValidate(a, b) {
    if (typeof a !== 'number' || typeof y !== 'number') {
        alert('One of the parameters is not a number');
        return NaN;
    }
    a = roundNumber(a);
    b = roundNumber(b);
    return a + b;
}
sum = newSumValidate(num1, num2);
console.log('The result is: '+ sum);