"use strict";
/* Agregar nuevos problemas en html para poder conocer mejor los tipos de datos */
let date = new Date();
let currentDate = date.getDate();
let htmlDate = document.getElementById("date");
// agrego formato  de cadena a la fecha
let htmlDateToString = date.toLocaleString();
// inserto la cadena con la fecha actual en HTML
htmlDate.textContent = htmlDateToString;
/* en base a esta funcion tratar de mejorarla y agregar un input en en html que reciba los valores a trabajar en la función */
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(3, 6));
