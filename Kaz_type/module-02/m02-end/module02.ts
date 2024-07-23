/* Module 2: Declare variable types in TypeScript
   Lab start  */

/*  EXERCISE 1
    TODO: Modify the code to add types to the variable declarations. 
    The resulting JavaScript should look the same as the original example when you're done. */

let firstName: string;
let lastName: string;
let fullName: string;
let age: number;
let ukCitizen: boolean;

firstName = 'Lena';
lastName = 'Jacobs';
age = 36;
ukCitizen = false;
fullName = `${firstName} ${lastName}`;

/* EXERCISE 2
   TODO: You can use types to ensure operation outcomes. Run the code as is and then modify 
   it to have strongly typed variables. Then, address any errors you find so that the result 
   returned to a is 12. */

let x: number;
let y: number;
let a: number;

x = 5;
y = 7;
a = x + y;

console.log(a);

/* EXERCISE 3
   TODO: In the following code, implement an enum type called Season that represents 
   the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so 
   you can pass in the season by referencing an item in the enum, for example 
   Season.Fall, instead of the literal string "Fall". */

enum Season {
  Otoño,
  Invierno,
  Primavera,
  Verano,
}
function whichMonths(season: Season) {
  let monthsInSeason: string;

  switch (season) {
    case Season.Otoño:
      monthsInSeason = 'Septiembre a Noviembre';
      break;
    case Season.Invierno:
      monthsInSeason = 'Diciembre a Febrero';
      break;
    case Season.Primavera:
      monthsInSeason = 'Marzo a Mayo';
      break;
    case Season.Verano:
      monthsInSeason = 'Junio a Agosto';
  }

  return monthsInSeason;
}

console.log(whichMonths(Season.Primavera));

/* EXERCISE 4
   TODO: Declare the array as the type to match the type of the items in the array. */

let randomNumbers: number[] = [];
let nextNumber: number;

for (let i: number = 0; i < 10; i++) {
  nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  randomNumbers.push(nextNumber);
}

console.log(randomNumbers);
