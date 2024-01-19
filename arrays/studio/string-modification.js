const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let stringSlice = str.slice(3) + str.slice(0,3);
console.log(`Original: "${str}",  modified string: "${stringSlice}"`);
//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("Enter the number of letters that will be relocated: ");
userInput = Number(userInput);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (userInput > str.length) {
  console.log(`Error: number of letters to be relocated is longer than the word. Default to moving 3 characters`);
  userInput = 3;
  stringSlice = str.slice(userInput) + str.slice(0,userInput);
}