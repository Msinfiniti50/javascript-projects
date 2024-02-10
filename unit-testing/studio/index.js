let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function(number) {
        let conditions = {
            2: "Launch",
            3: "Code",
            5: "Rocks"
        };

        if (number % 2 === 0 && number % 3 === 0) {
            return "LaunchCode!";
        }

        let output = "";
        for (let divisor in conditions) {
            if (number % divisor === 0) {
                output += conditions[divisor] + " ";
            }
        }
        output = output.trim();

        if (output === "") {
            return "Rutabagas! That doesn't work.";
        } else if (output === "Launch Rocks") {
            return output + "! (CRASH!!!)";
        } else {
            return output + "!";
        }
    }
}    



  
//let launchCode = function(number){
//    if (number % 2 === 0 && number %3 === 0){
//        return "Launchcode!";
    
  

module.exports = launchcode;
organization: "nonprofit";
executiveDirector: "Jeff";
percentageCoolEmployees: 100;
programsOffered: ["Web Development", "Data Analysis", "Liftoff"];
launchOutput: ["Launch!", "Code!", "Rocks!", "LaunchCode!", "Code Rocks!", "Launch Rocks!", "LaunchCode Rocks!", "Rutabagas! That doesn't work."];

