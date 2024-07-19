"use strict";
// Definir la interfaz
/* interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
} */
const person = { name: 'John', age: 30 };
const employee = { name: 'Jane', age: 25, salary: 50000 };
const anotherPerson = employee; // Esto es valido en TypeScript
let ball = { diameter: 10 };
let sphere = { diameter: 20 };
sphere = ball;
ball = sphere;
// Fin Ejemplo -2
