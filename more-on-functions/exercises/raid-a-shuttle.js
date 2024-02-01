let nonSuspiciousFunction = function(a) {
  if (checkFuel(a) === 'green') {
     return a - 100001;
  }
  else if (checkFuel(a) === 'yellow') {
     return a - 50001;
  }
  else {
     return a;
  }
};
let cargoSwipe = function(cargoHold) {
  let swag = [];
  let goldIndex = cargoHold.indexOf('gold');
  let satelliteIndex = cargoHold.indexOf('satellite');
  if (goldIndex !== -1) {
      swag.push(cargoHold.splice(goldIndex, 1)[0]);
  }
  if (satelliteIndex !== -1) {
      swag.push(cargoHold.splice(satelliteIndex, 1)[0]);
  }
  cargoHold.push('sand', 'rocks');
  return swag;

let irs = function(levelOfFuel, itemsInCargo) {
  let arr = deckMops(itemsInCargo);
  return `Raided ${nonSuspiciousFunction(fuelLevel)} kg 
  of fuel from the tanks, and stole ${arr[0]} and ${arr[1]} from the cargo hold.`
};
console.log(cargoSwipe(cargoHold)); // Test the cargoSwipe function
console.log(irs(fuelLevel, cargoHold)); // Test the irs function
/* Steal some fuel from the shuttle:
 

 
//a). Define an anonymous function and set it equal to a variable with a normal, non-suspicious name. The function takes one parameter. This will be the fuel level on the shuttle.

//b). You must siphon off fuel without alerting the TAs. Inside your function, you want to reduce the fuel level as much as possible WITHOUT changing the color returned by the checkFuel function.

//c). Once you figure out how much fuel to pump out, return that value.

//d). Decide where to best place your function call to gather our new fuel.

/* Next, liberate some of that glorious cargo.
 * /

//a). Define another anonymous function with an array as a parameter, and set it equal to another innocent variable.

//b). You need to swipe two items from the cargo hold. Choose well. Stealing water ain’t gonna get us rich. Put the swag into a new array and return it from the function.

//c). The cargo hold has better security than the fuel tanks. It counts how many things are in storage. You need to replace what you steal with something worthless. The count MUST stay the same, or you’ll get caught and thrown into the LaunchCode brig.

//d). Don’t get hasty, matey! Remember to test your function.

/* Finally, you need to print a receipt for the accountant. Don’t laugh! That genius knows MATH and saves us more gold than you can imagine.
 * /
 
//a). Define a function called irs that can take fuelLevel and cargoHold as arguments.
	
//b). Call your anonymous fuel and cargo functions from within irs.

//c). Use a template literal to return, "Raided _____ kg of fuel from the tanks, and stole ____ and ____ from the cargo hold."
*/}
