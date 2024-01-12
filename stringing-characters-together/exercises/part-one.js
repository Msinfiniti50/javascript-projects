//let num = 1001;

//Returns 'undefined'.
//console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
//let numString = num.toString();
//let numLength = (numString.length);
//console.log(numLength);
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
//let decimal = 3.14567;
//let decimalString = decimal.toString();
//let decimalLength =  decimalString.length;
//console.log(decimalLength);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can. handle both cases

let num = 77.79311;
if (Number.isInteger(num)) {
    let numString = num.toString();
    let numLength = numString.length;
    console.log(numLength);
    } else {
        let decimalString = num.toString();
        let decimalLength = decimalString.length;
        console.log(decimalLength);
    }
    