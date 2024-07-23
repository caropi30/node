interface IceCream {
  flavor: string;
  scoops: number;
  instructions?: string;
}

let myIceCream: Sundae = {
  flavor: 'vanilla',
  scoops: 2,
  sauce: 'caramel',
  nuts: true,
};

console.log(myIceCream.flavor);

/* function tooManyScoops(desert: IceCream) {
  if (desert.scoops >= 4) {
    return desert.scoops + ' is too many scoops!';
  } else {
    return 'Your order will be ready soon!';
  }
} */

// console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5 }));

interface Sundae extends IceCream {
  sauce: 'chocolate' | 'caramel' | 'strawberry';
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

function tooManyScoops(desert: Sundae) {
  if (desert.scoops >= 4) {
    return desert.scoops + ' is too many scoops!';
  } else {
    return 'Your order will be ready soon!';
  }
}
console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5, sauce: 'caramel' }));
