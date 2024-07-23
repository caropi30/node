/* Agregar nuevos problemas en html para poder conocer mejor los tipos de datos */
let numeroUno: number;
let numeroDos: number;

document.addEventListener("DOMContentLoaded", () => {
  let htmlDate: HTMLParagraphElement = document.getElementById(
    "date"
  ) as HTMLParagraphElement;
  const input1 = document.getElementById("number_1") as HTMLInputElement;
  const input2 = document.getElementById("number_2") as HTMLInputElement;
  const form = document.getElementById("myForm") as HTMLFormElement;
  const showSum = document.getElementById("showSum") as HTMLDivElement;

  // Obtener la fecha adecuadamente en TS
  let date: Date = new Date();
  let currentDate: number = date.getDate();
  // agrego formato  de cadena a la fecha
  let htmlDateToString: string = date.toLocaleString();
  // inserto la cadena con la fecha actual en HTML
  htmlDate.textContent = htmlDateToString;

  /* en base a esta función tratar de mejorarla y agregar un input en en html que reciba los valores a trabajar en la función */
  function addNumbers(x: number, y: number): number {
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
let unk: unknown = "asd";
unk = 10;
unk = true;
unk = "JONATandb";
// unk = { lala: 1 };

// console.log(unk());

console.log((unk as string).toUpperCase());

// Incompleto, hay que seguir trabajando en la idea para lograr algo claro con TS
