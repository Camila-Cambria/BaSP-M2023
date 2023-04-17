console.log ('EXERCISE 2: STRINGS');

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
(utilizar toUpperCase).*/

console.log ('Exercise 2-a');
var company, companyUp
company= 'radium-rocket';
companyUp= company.toUpperCase();
console.log(companyUp);


/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5
caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log ('Exercise 2-b');
var company, newCompany;
newCompany=company.substring(0,5);
console.log(newCompany);

/* c.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos
3 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log ('Exercise 2-c');
var company, lastCompany;
lastCompany= company.substring(company.length - 3);
console.log (lastCompany);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
toLowerCase y el operador +). */

console.log ('Exercise 2-d');
var company, upCompany;
upCompany= company.substring (0,1).toUpperCase() + company.substring(1).toLowerCase();
console.log(upCompany);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

console.log ('Exercise 2-e');
var companySpace, blankSpace;
companySpace= 'radium rocket';
blankSpace= companySpace.indexOf(' ');
console.log(blankSpace);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */

console.log ('Exercise 2-f');
var companySpace, firstWord, space, secondWord, newForm;
space = companySpace.indexOf(' ');
firstWord =companySpace.substring(0, space);
secondWord = companySpace.substring(space + 1);
newForm=firstWord[0].toUpperCase() + firstWord.substring(1).toLowerCase() + ' '  +
        secondWord[0].toUpperCase() + secondWord.substring(1).toLowerCase();
console.log(newForm);
