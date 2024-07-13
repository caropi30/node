"use strict";
// Variables
// cCmo se declara una Variable
// Hay 4 formas de declarar variables.
// 1. tanto con el tipo, como con el valor inicial
let empName_1 = "John";
console.log(empName_1);
// 2. solo el tipo
let empName_2;
// 3. solo el valor inicial
let empName_3;
// 4. sin el tipo y sin el valor inicial
let name_1;
name_1 = "Robert";
// Como asignar un valor a una variable con el operador de asignación '='
let empName_4 = "John"; // Declaración
let message = "Hello World";
// di
// diferencias entre var vs let
// var
// diferencia #1
var aa;
// diferencia #2
var a = "Hello"; //inicializacion
console.log("actualiza el valor de a:", a);
var a = "Welcome to TypeScript"; //re-declarar
console.log("re-declaración de valor de a:", a);
// diferencia #3
var x = 100;
function example1() {
    if (true) {
        var x = 100;
        console.log(x); // scope del bloque
    }
    console.log(x); // scope de la función
}
// Let
// diferencia #1
var bb;
// diferencia #2
let b = "Hello"; //inicializacion
console.log('valor de b:', b);
b = 'Hello World';
console.log('Actualizar el valor de b:', b);
