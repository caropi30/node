"use strict";
let message = "Hello World";
console.log(message);
const typeOfVariables = () => {
    const num = 10;
    const str = "Here's a string";
    const bool = true;
    const obj = {
        id: 9,
        name: 'Pepito'
    };
    const arr = [1, 2, 3];
    const variables = [num, str, bool, obj, arr];
    variables.forEach(item => console.log(`Tipo:typeof ${item}, Valor: ${item}`));
};
typeOfVariables();
