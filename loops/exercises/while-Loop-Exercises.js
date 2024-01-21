//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingFuelLevel = 2000;
let astronauts = 7;
let altitude = 0;




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
//let startingFuelLevel = input.question("Please enter a positive integer value greater than 5000 but less than 30000: ");
startingFuelLevel = Number(startingFuelLevel);

while (startingFuelLevel < 5000 || startingFuelLevel > 30000) {
  startingFuelLevel = input.question("Please enter a positive integer value greater than 5000 but less than 30000: ");
  startingFuelLevel = Number(startingFuelLevel);
} 
console.log(startingFuelLevel);






//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

while (astronauts > 7) {
  astronauts = input.question("Please enter the number of astronauts: ");
  astronauts = Number(astronauts);
}  
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.



/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
