let message: string = "Hello World";
console.log(message);


const typeOfVariables = () => {
    const num: number = 10;
    const str: string = "Here's a string";
    const bool: boolean = true;
    const obj: object = {
        id: 9,
        name: 'Pepito'
    }
    const arr: object =  [1,2,3]

    const variables = [num, str, bool, obj, arr ]
    variables.forEach(item => console.log( `Tipo:typeof ${item}, Valor: ${item}`))
}

typeOfVariables();