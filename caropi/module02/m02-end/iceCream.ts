interface IceCream {
	flavor: string;
	scoops: number;
}

let myIceCream: Sundae = {
	flavor: 'vanilla',
	scoops: 2,
	sauce: 'caramel',
	nuts: true,
};
console.log(myIceCream.flavor);

const tooManyScoops = (dessert: Sundae) => {
	return dessert.scoops >= 4
		? dessert.scoops + ' is too many scoops!'
		: dessert.scoops + 'is too many scoops!';
};

console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5, sauce: 'caramel' }));

interface Sundae extends IceCream {
	sauce: 'chocolate' | 'caramel' | 'strawberry';
	nuts?: boolean;
	whippedCream?: boolean;
	instructions?: boolean;
}
