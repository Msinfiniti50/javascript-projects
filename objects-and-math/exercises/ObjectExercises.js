function randomSteps() {
   return Math.floor(Math.random() * 11);
}
let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {
   return Math.floor(Math.random()*11);
 }
};
let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {
return Math.floor(Math.random()*11); 
 }
};
let chimpanzee = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {
return Math.floor(Math.random()*11);
 }
};
let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {
return Math.floor(Math.random()*11); 
   }
}; 
let tardigrade = {
   name: "Almina",
   species: "Tardigrage",
   mass: 0.0000000001,
   astronautID: 5,
   move: function () {
return Math.floor(Math.random()*11);
 }
};
let crew = [superChimpOne, salamander, chimpanzee, beagle, tardigrade];

//let ids = [crew[0].astronautID, crew[1].astronautID, crew[2].astronautID, crew[3].astronautID, crew[4].astronautID]; 

function fitnessTest(candidates){
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
       
       }
       results.push(`${candidates[i].name} took ${turns} turn to take ${numSteps} steps.`);
      }
   return results;
   }
   console.log(fitnessTest(crew));
       








// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!