/* function addNumbers(x: number, y: number): number {
    return x + y;
}

addNumbers(1, 2);
console.log(addNumbers(1, 2));
 */
/*
let addNumbers = function (x: number, y: number): number {
  return x + y;
};

console.log(addNumbers(1, 2)); */
/* let sum = function (input: number[]): number {
  let total: number = 0;
  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
};

console.log(sum([1, 2, 3])); */
// función anónima
var addNumbers1 = function (x, y) {
    return x + y;
};
// función de flecha
var addNumbers2 = function (x, y) { return x + y; };
/* ---- */
/* let total2 = (input: number[]): number => {
  let total: number = 0;
  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
}; */
/* Ejercicio: Creación de funciones */
/* function displayAlert(message: string | number) {
  alert(`The message is "${message}"`);
}

displayAlert(1); */
/* function sum(input: number[]): number {
  let total: number = 0;
  for (let count = 0; count < input.length; count++) {
    if (isNaN(input[count])) {
      continue;
    }
    total += Number(input[count]);
  }
  return total;
} */
// console.log(sum(2)); // no retorna el resultado correcto por que no se pasa el parámetro como una matriz
// console.log(sum([2, 3])); // parámetro como matriz
/* Parámetros opcionales */
/* function addNumbers(x: number, y?: number): number {
  if (y === undefined) {
    return x;
  } else {
    return x + y;
  }
}

addNumbers(1, 2); // Return 3
addNumbers(1) // Return 1 */
/* Parámetros predeterminados */
/* function addNumbers(x: number, y = 25): number {
  return x + y;
}

addNumbers(1, 2); // Return 3
addNumbers(1); // Return 26 */
/* Parámetros REST */
/* let addAllNumbers = (
  firstNumber: number,
  ...restOfNumber: number[]
): number => {
  let total: number = firstNumber;
  for (let counter = 0; counter < restOfNumber.length; counter++) {
    if (isNaN(restOfNumber[counter])) {
      continue;
    }
    total += Number(restOfNumber[counter]);
  }
  return total;
};

addAllNumbers(1, 2, 3, 4, 5, 6, 7); // return 28
addAllNumbers(2); // return 2
// addAllNumbers(2, 3 "three"); // flags error due to data type at design time, returns 5
 */
/* Parámetros de objeto deconstruido */
/*
interface Message {
  text: string;
  sender: string;
}

function displayManager({ text, sender }: Message) {
  console.log(`Message from ${sender}: ${text}`);
}

displayManager({ sender: 'Christopher', text: 'Hello, world' }); */
// console.log(displayManager({ sender: 'Christopher', text: 'Hello, world' }));
/* Ejercicio: Pruebas con parámetros */
/* Parámetros obligatorios */
// let addThreeNumbers = (x: number, y: number, z: number): number => x + y + z;
// addThreeNumbers(10, 20);
// addThreeNumbers(10, 20, 30, 40);
// addThreeNumbers(10, 20, 30);
/* Parámetros opcionales */
/* let addThreeNumbers = (x: number, y: number, z?: number): number => {
  if (z === undefined) {
    return x + y;
  } else {
    return x + y + z;
  }
};

addThreeNumbers(10, 20);
addThreeNumbers(10, 20, 30); */
/* Parámetros predeterminados */
var subtractThreeNumbers = function (x, y, z) {
    if (z === void 0) { z = 100; }
    return x - y - z;
};
subtractThreeNumbers(10, 20);
subtractThreeNumbers(10, 20, 15);
