let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"]
};
console.log(tortoiseOne.weight);
newWeight = tortoiseOne.weight + 15;
tortoiseOne ["weight"] = newWeight;
console.log(tortoiseOne["weight"]);

let tortoiseOnes = {
    species: "Galapagos Tortoise",
    name: "Pete",
    weight: 919,
};
console.log(tortoiseOnes);

//tortoiseTwo["age"] = 120;
//tortoiseTwo["speed"] = 'Faster than the hare';

console.log(tortoiseOnes);
console.log(tortoiseOnes.age);

let giraffe = {
    species: "Reticulated Giraffe",
    names: "Cynthaia",
    weight: 1500,
    age: 15,
    diet:  "Leaves",
   birthday: function() {
    let newWeight = giraffe.weight + 20;  
    return this.names + " will be  " + (this.age  + 5) + " on her next Birthday. " + [this.species] + "is one of our oldest species here at the zoo.";
   }
}
console.log(giraffe.weight);
 console.log(giraffe["weight"]);
console.log(giraffe.age);
console.log(giraffe);
console.log(giraffe.birthday());

let tortoiseTwo = {
    species: "Galapagos Tortoise",
    namer: "Patricia",
    weight: 800,
    age: 85,
    diets: ["pumpkins", "lettuce", "cabbage"],
    sign: function() {
        return this.namer + "'s weight: is " + this.weight + " " +  this.species + " like to eat " + this.diets.join(" ") + " and  is one of our oldest species here";
    }
}
console.log(tortoiseTwo.sign());





// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.

