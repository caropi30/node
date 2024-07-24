// Definir la interfaz
/* interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
} */
var person = { name: 'John', age: 30 };
var employee = { name: 'Jane', age: 25, salary: 50000 };
var anotherPerson = employee; // Esto es valido en TypeScript
var ball = { diameter: 10 };
var sphere = { diameter: 20 };
sphere = ball;
ball = sphere;
var tube = { diameter: 12, length: 3 };
// tube = ball;
ball = tube;
function tooManyScoops(desert) {
    if (desert.scoops >= 4) {
        return desert.scoops + ' is too many scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5, sauce: 'caramel' }));
var myIceCream;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
var myStr = myIceCream[0];
console.log(myStr);
