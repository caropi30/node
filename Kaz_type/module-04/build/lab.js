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
function sum(input) {
    var total = 0;
    for (var count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
console.log(sum(2)); // no retorna el resultado correcto por que no se pasa el parámetro como una matriz
console.log(sum([2, 3])); // parámetro como matriz
