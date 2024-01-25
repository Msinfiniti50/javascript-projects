//function makeLine(size) {
  //  let line = '';
    //for (let i = 0; i < size; i++) {
//       line += '#';
  //  }
//    return line; 
// } console.log(makeLine(5));



//function makeSquare(width, height) {
//    let square = '';
//    for (let i = 0; i < height; i++) {
//        for (let j = 0; j < width; j++) {
//            square += '#';
//        }
//    square += '\n';
//    }
//    return square;
//}
//console.log(makeSquare(5,4));


//function makeRectangle(width, height) {
//    let rectangle = '';
//    for (let i = 0; i < height; i++) {
//        for (let j = 0; j < width; j++){
//            rectangle += '#';
//        }
//    rectangle += '\n';
//    }
//    return rectangle;
//}
//console.log(makeRectangle(5,3));

//function makeDownwardStairs(height) {
//    let stairs = '';
//    for (let i = 0; i < height; i++) {
//        for (let j = 0; j <= i; j++) {
//            stairs += '#';
//        }
//    stairs += '\n';
//    }
//    return stairs;
//}
//console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars, char = '#') {
let line = '';
for (let i = 0; i < numSpaces; i++) {
        line += ' ';
    }
  for (let j = 0; j < numChars; j++) {
        line += char;
   }
    for (let k = 0; k < numSpaces; k++) {
       line += ' ';
   }
 return line;
}
//console.log(makeSpaceLine(3, 5));



function makeIsoscelesTriangle(height,char = '#'){
    let triangle = '';
    for (let i = 0; i < height; i++) {
triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
 }
         return triangle.slice(0, -1);
}
//console.log(makeIsoscelesTriangle(5));  

function makeDiamond(height, char = '#') {
    let diamond = '';
    for (let i = 0; i < height; i++) {
        diamond += (makeSpaceLine(height -i - 1, 2*i + 1) + '\n');
    }
    let reversedDiamond = diamond.split('\n').reverse().join('\n');
     return diamond + reversedDiamond.slice(reversedDiamond.indexOf('\n') + 1);
}
