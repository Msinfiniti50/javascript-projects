// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

// class Astronaut {
//    constructor(name, age = 50, mass = 159){
//      this.name = name;
//      this.age = age;
//      this.mass = mass;
//    }
// }
// class Car {
//   constructor(make, model, year, color, mpg){
//      this.make = make;
//      this.model = model;
//      this.year = year;
//      this.color = color;
//      this.mpg = mpg;
//   }
// }
//let tortoise = new Astronaut('Speedy', 120);

//console.log(tortoise.name, tortoise.age, tortoise.mass);
//let myCar = new Car('Chevy', 'Astro', 1985, 'gray', 20);
// let myCar = new Car('Tesla', 'Model S', 2019)
// console.log(myCar)
// console.log(typeof myCar .year)
// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!

class plant{
  constructor(type, height) {
    this.type = 'hydrandria';
    this.height = 10;
  }
  grow() {
   this.height = this.height + 1;
  }
}
let myPlant = new plant('hydrandria', 10);
myPlant.grow();
console.log(myPlant.height);