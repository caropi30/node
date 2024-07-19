// Definir la interfaz
/* interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
} */

// implementación
/* let employee: Employee = {
  firstName: 'Kaz',
  lastName: 'Dev',
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  },
}; */

// lanza error
// employee.firstName = 10; //* Error - tipo 'numero' no es asignable al tipo 'string'

/* ----------------------------------- */
/* Tipos Estructurales - interfaces.md */
/* ----------------------------------- */
// Inicio Ejemplo - 1
interface Person {
  name: string;
  age: number;
}

interface Employee {
  name: string;
  age: number;
  salary: number;
}

const person: Person = { name: 'John', age: 30 };
const employee: Employee = { name: 'Jane', age: 25, salary: 50000 };

const anotherPerson: Person = employee; // Esto es valido en TypeScript
// Fin Ejemplo -1

// Inicio Ejemplo - 2
// Ball y Sphere tienen la misma estructura (un miembro `diameter` de tipo `number`), por lo que son intercambiables

interface Ball {
  diameter: number;
}

interface Sphere {
  diameter: number;
}

let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };

sphere = ball;
ball = sphere;
// Fin Ejemplo -2
