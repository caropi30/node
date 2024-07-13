// Variables
// cCmo se declara una Variable
// Hay 4 formas de declarar variables.
// 1. tanto con el tipo, como con el valor inicial

let empName_1: string = "John";
console.log(empName_1);

// 2. solo el tipo

let empName_2: string;

// 3. solo el valor inicial

let empName_3: "John";

// 4. sin el tipo y sin el valor inicial

let name_1;
name_1 = "Robert";

// Como asignar un valor a una variable con el operador de asignación '='
let empName_4: string = "John"; // Declaración
let message = "Hello World";

// diferencias entre var vs let vs const
// var
// diferencia #1 var se puede declarar sin inicializar
var aa: number;

// diferencia #2
var a: string = "Hello"; //inicializacion
console.log("actualiza el valor de a:", a);
var a = "Welcome to TypeScript"; //re-declarar
console.log("re-declaración de valor de a:", a);

// diferencia #3
// var x: number = 100;
function example1() {
  if (true) {
    var x = 100;
    console.log(x); // scope del bloque
  }
  console.log(x); // scope de la función
}

// Let
// diferencia #1 let se puede declarar sin inicializar
var bb: number;

// diferencia #2
let b: string = "Hello World"; //inicializacion
console.log('valor de b:', b);
b = 'Hello World'; // error: no puede ser actualizado
// let b = 'Welcome to typescript'; // error: no se puede re-declarar
// console.log("se re-declara el valor de b: ", b);
console.log('Actualizar el valor de b:', b);

// diferencia #3
function example2() {
	if(true){
		let x = 100;
		console.log(x); // only block scoped
	}
	// quitar el comanetario en la linea siguiente 
	// console.log(x); // error: la funcion no tiene un scoped
}

// Const
// diferencia #1 cons debe inicializarse durante la declaracion.
// const cc: number; // Error
// cons cc: number = 2.742;
// console.log('constant value: ', c);
// c = 1000; // error: no se puede actualizar el valor de una constante
const c = 200 // error: no se puede volver a declarar una constante.

// diferencia #3
function example3() {
	if(true) {
		const x = 100;
		console.log(x) // scope solo para este bloke
	}
	// console.log(x); // error: no hay un scope en la funcion.
}

// Tipos de datos
console.log("Tipos de Datos");
// 'number'
let firstNumber: number = 12.0;
let secondNumber: number = 0X37CF;
let thirdNumber: number = 0o377;
let fourthNumber: number = 0b111000;
console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);
console.log(fourthNumber);

// 'string'
let empName11: string = "John";
let empName12: string = 'XXXX';
console.log(empName11);
console.log(empName12);

// 'boolean'
let isPresent: boolean = true;
console.log(isPresent); 

// 'undefined'
let x = undefined; // valor es 'undefined'
console.log(x);
console.log(typeof(x));
x = "hello";
console.log(x);
console.log(x);

let x1: undefined; // el tipo de dato es 'undefined'
// x1 = "hello"; // Error:

// 'null'
let x2 = null; // el valor es 'null'
console.log(x2);
console.log(typeof(x2));
x2 = "hello";
console.log(x2);
console.log(x2);
