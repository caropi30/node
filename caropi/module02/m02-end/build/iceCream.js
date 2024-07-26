"use strict";
let myIceCream = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true,
};
console.log(myIceCream.flavor);
const tooManyScoops = (dessert) => {
    return dessert.scoops >= 4
        ? dessert.scoops + ' is too many scoops!'
        : dessert.scoops + 'is too many scoops!';
};
console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5, sauce: 'caramel' }));
