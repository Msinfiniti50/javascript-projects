// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 2;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTempCelsius =-300;
let maximumFuelTempCelsius = -150;
let fuelLevel = "100%";
let weatherStatus = "Clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount < 7) {
    console.log("Astronauts capacity not reached" + "." + "Max is 7" + ".");
} else if (astronautCount === 7) {
    console.log("Astronaut capacity reached" + "!");
} 


// add logic below to verify all astronauts are ready

if (astronautCount === 7 && astronautStatus === "ready" && totalMassKg < maximumMassLimit  && fuelTempCelsius >= -300 && fuelTempCelsius <= -150 && fuelLevel === "100%" && weatherStatus === "Clear") {
console.log("------------------------------");
console.log("All systems are a go"+ "!"+"." + "Initiating space shuttle launch sequence" + ".");
console.log(date);
console.log(time);
console.log(astronautCount);
console.log(crewMassKg);
console.log(fuelMassKg);
console.log(shuttleMassKg);
console.log(totalMassKg);
console.log(fuelTempCelsius);
console.log(weatherStatus);
console.log("------------------------------")
console.log("Have a safe trip astronauts" + "!");
}else  if (astronautCount !== 7 || astronautStatus !== "ready" || totalMassKg >= maximumMassLimit || fuelTempCelsius < -300 ||  fuelTempCelsius > -150 && fuelLevel !== "100%" || weatherStatus !== "Clear") {  
console.log("Launch scrubbed" + ".");
}
// Verify shuttle launch can proceed based on above conditions
