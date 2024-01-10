// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "Ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.32;
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
    console.log("Astronauts capacity almost reached" + "." + "Max is 7" + ".");
} else if (astronautCount === 7) {
    console.log("Astronaut capacity reached" + "!");
} 
if (fuelLevel  === "100%") {
    console.log("fuelLevel good" +".");
} else if (fuelLevel < "100%") {
 console.log("Need to refuel soon " + ".");
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "Ready" && preparedForLiftOff === true) {
    console.log("Astronauts ready for liftoff" + ".");
} else if (astronautStatus === "Not all present" && preparedForLiftOff === false) {
    console.log("Launch not ready" + "!");
}
if (weatherStatus === "Clear"  && astronautStatus === "Ready" && totalMassKg < maximumMassLimit && maximumMassLimit === 85000 && fuelTempCelsius > -300 && fuelTempCelsius < -150 && fuelLevel === 100 + "%") {
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
}  
if (weatherStatus === "Gloomy" && astronautStatus === "Not all present" &&  totalMassKg > maximumMassLimit  && fuelTempCelsius < -300 && fuelTempCelsius > -150 && fuelLevel <= "100%")  {
console.log("Launch postponed till better days" + ".");
}
// Verify shuttle launch can proceed based on above conditions
