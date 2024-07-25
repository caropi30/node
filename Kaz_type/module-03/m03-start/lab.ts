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

// Si añadimos un tipo que estructuralmente contiene todos los miembros de `Ball` y
// `Sphere` entonces también se puede asignar a una variable de tipo `Ball` o `Sphere`
interface Tube {
  diameter: number;
  length: number;
}

let tube: Tube = { diameter: 12, length: 3 };
// tube = ball;
ball = tube;

// En Este caso:
// `Tube` tiene todos los miembros de `Ball` (`diameter`), por lo que una variable de tipo `Tube`
//  puede ser asignada a una variable de tipo `Ball`.
// Sin embargo, una variable de tipo `Ball` no puede ser asignada a una variable de tipo `Tube`
// por que `Ball` no tiene `length`.
// Fin Ejemplo -2

/* Extension de una interfaz en TypeScript */

interface IceCream {
  flavor: string;
  scoops: number;
  instructions?: string;
}

// let myIceCream: Sundae = {
//   flavor: 'vanilla',
//   scoops: 2,
//   sauce: 'caramel',
//   nuts: true,
// };

// console.log(myIceCream.flavor);

/* function tooManyScoops(desert: IceCream) {
  if (desert.scoops >= 4) {
    return desert.scoops + ' is too many scoops!';
  } else {
    return 'Your order will be ready soon!';
  }
} */

// console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5 }));

interface Sundae extends IceCream {
  sauce: 'chocolate' | 'caramel' | 'strawberry';
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

function tooManyScoops(desert: Sundae) {
  if (desert.scoops >= 4) {
    return desert.scoops + ' is too many scoops!';
  } else {
    return 'Your order will be ready soon!';
  }
}
// console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5, sauce: 'caramel' }));

interface IceCreamArray {
  [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0];
// console.log(myStr);

/* Descripción de una API de JavaSCript mediante una interfaz */
const fecthURL = 'https://jsonplaceholder.typicode.com/posts';
// Interface describing the shape of our json data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(url: string) {
  let response = await fetch(url);
  let body = await response.json();
  return body as Post[];
}

async function showPost() {
  let posts = await fetchPosts(fecthURL);
  // Display the contents of the first item in the response
  let post = posts[0];
  console.log(`Post # ${post.id}`);
  // If the userId is 1, then display a note that it's an administrator
  console.log(
    `Autor: ${post.userId === 1 ? 'Administrator' : post.userId.toString()}`
  );
  console.log(`Title: ${post.title}`);
  console.log(`Body: ${post.body}`);
}

showPost();
