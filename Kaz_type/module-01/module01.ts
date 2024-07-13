/* Agregar nuevos problemas en html para poder conocer mejor los tipos de datos */
let date: Date = new Date();
let currentDate: number = date.getDate();

let htmlDate: HTMLParagraphElement = document.getElementById(
  "date"
) as HTMLParagraphElement;

// agrego formato  de cadena a la fecha
let htmlDateToString: string = date.toLocaleString();

// inserto la cadena con la fecha actual en HTML
htmlDate.textContent = htmlDateToString;

/* en base a esta funcion tratar de mejorarla y agregar un input en en html que reciba los valores a trabajar en la función */
function addNumbers(x: number, y: number) {
  return x + y;
}
console.log(addNumbers(3, 6));
