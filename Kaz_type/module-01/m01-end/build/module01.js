"use strict";
/* Agregar nuevos problemas en html para poder conocer mejor los tipos de datos */
let numeroUno;
let numeroDos;
document.addEventListener("DOMContentLoaded", () => {
    let htmlDate = document.getElementById("date");
    const input1 = document.getElementById("number_1");
    const input2 = document.getElementById("number_2");
    const form = document.getElementById("myForm");
    const showSum = document.getElementById("showSum");
    // Obtener la fecha adecuadamente en TS
    let date = new Date();
    let currentDate = date.getDate();
    // agrego formato  de cadena a la fecha
    let htmlDateToString = date.toLocaleString();
    // inserto la cadena con la fecha actual en HTML
    htmlDate.textContent = htmlDateToString;
    /* en base a esta función tratar de mejorarla y agregar un input en en html que reciba los valores a trabajar en la función */
    function addNumbers(x, y) {
        return x + y;
    }
    // Con esta función obtengo los valores de los inputs, luego los sumo y luego los muestro.
    const obtenerValores = () => {
        const valor1 = input1.value;
        const valor2 = input2.value;
        numeroUno = parseInt(valor1);
        numeroDos = parseInt(valor2);
        console.log(`Input 1: ${valor1}, Input 2: ${valor2}`);
        // verifico si los valores son números validos.
        if (isNaN(numeroUno) || isNaN(numeroDos)) {
            showSum.textContent = "por Favor Ingrese Números Validos";
            return;
        }
        const resultado = addNumbers(numeroUno, numeroDos);
        showSum.textContent = resultado.toString();
    };
    input1.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            obtenerValores();
        }
    });
    input1.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            obtenerValores();
        }
    });
    input1.addEventListener("blur", obtenerValores);
    input2.addEventListener("blur", obtenerValores);
    // form.addEventListener("submit", (event) => {
    //   event.preventDefault();
    //   obtenerValores();
    //   form.reset();
    // });
});
// Ejemplo de uso de tipo 'unknown'
let unk = "asd";
unk = 10;
unk = true;
unk = "JONATandb";
// unk = { lala: 1 };
// console.log(unk());
console.log(unk.toUpperCase());
// Incompleto, hay que seguir trabajando en la idea para lograr algo claro con TS
