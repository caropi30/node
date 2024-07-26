/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare the Loan interface. */


/*  TODO: Declare the ConventionalLoan interface. */



/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

interface Loan {
	principle    : number;
	interestRate : number;
}

interface ConventionalLoan extends Loan {
	months : number
}

function calculateInterestOnlyLoanPayment(data : Loan) {
    // Calculates the monthly payment of an interest only loan
    let interest = data.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment : number;
    payment = data.principle * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

/*  TODO: Update the calculateConventionalLoanPayment function. */

function calculateConventionalLoanPayment(data : ConventionalLoan) {
    // Calculates the monthly payment of a conventional loan
    let interest = data.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment : number;
    payment = data.principle * interest / (1 - (Math.pow(1 / (1 + interest), data.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let interestOnlyPayment1 : string = calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
let conventionalPayment2 : string = calculateConventionalLoanPayment({
	principle: 30000,
	interestRate: 5,
	months: 180,
});

console.log(interestOnlyPayment1);     //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment2);     //* Returns "The conventional loan payment is 237.24" 
