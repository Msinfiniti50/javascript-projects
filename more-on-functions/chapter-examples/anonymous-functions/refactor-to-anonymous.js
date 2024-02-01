//function reverse(str) {
//  let lettersArray = str.split('');
//  let reversedLettersArray = lettersArray.reverse();
//  return reversedLettersArray.join('');
//}

//console.log(reverse("LaunchCode"));


let f1 = function(str) {
  return str + str;
};

let f2 = f1;
console.log(f1("LaunchCode"));