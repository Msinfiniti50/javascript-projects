//let i = 0;

//while (i < 51) {
//  console.log(i);
//  i++;
//}

//const input = require('readline-sync');

//let num = input.question('Please enter a  positive number: ');
//num = Number(num);
//while (num <= 0) {
//    num = input.question('Invalid input.Please enter a positive number: ');
//    num = Number(num);
//}console.log(num);
//let i = 0;

//while (i < 51) {
 // console.log(i);
//  i--;
//}
//for (let i = 0; i < 42; i++) {
// console.log(i);
//if (i > 10) {
//   break;
 //}
//}

let numbers = [2, -5, 13, 42];
let searchVal = 42;
let i = 0;

while (i <numbers.length) {
  if (numbers[i] === searchVal){
    break;
}
i++;
}

if (i < numbers.length) {
  console.log("The value", searchVal, "was located at index", i);
}else{
  console.log("The value", searchVal, "is not in the array.");
}