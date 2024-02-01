function printMessage() {
    console.log("The future is now!");
}

setTimeout(printMessage, 5000);


var reverse = function(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
}
console.log(reverse('hello'));
let nums = [3.14, 42, 4811];

let timesTwo = function (n) {
    return n*2;
};
//let doubled = nums.map(timesTwo);

//console.log(nums);
//console.log(doubled);

//let nums =[3.14, 42, 4811];

let doubled = nums.map(function (n) {
    return n*2;
});
console.log(doubled);



