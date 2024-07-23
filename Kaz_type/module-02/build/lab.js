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
let tube = { diameter: 12, length: 3 };
// tube = ball;
ball = tube;
// En Este caso:
// `Tube` tiene todos los miembros de `Ball` (`diameter`), por lo que una variable de tipo `Tube`
//  puede ser asignada a una variable de tipo `Ball`.
// Sin embargo, una variable de tipo `Ball` no puede ser asignada a una variable de tipo `Tube`
// por que `Ball` no tiene `length`.
// Fin Ejemplo -2
