function randomFromArray(arr){
  
  //Your code here to select a random element from the array passed to the function.
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}
module.exports = {
  randomFromArray: randomFromArray
}
//TODO: Export the randomFromArray function.
