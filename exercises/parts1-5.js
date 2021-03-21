// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
// let spacecraftName: string = 'Determination'; 
// let speedMph: number = 17500; 
var kilometersToMars = 225000000;
var kilometersToMoon = 384400;
var milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
var milesToMars = kilometersToMars * milesPerKilometer;
var hoursToMars = milesToMars / speedMph;
var daysToMars = hoursToMars / 24;
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
// function getDaysToLocation(kilometersAway: number) : number {
//     let milesAway: number = kilometersAway * milesPerKilometer; 
//     let hoursToLocation: number = milesAway / speedMph;
//     let daysToLocation: number = hoursToLocation / 24;
//     return daysToLocation; 
// }
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(`${spacecraftName} takes ${getDaysToLocation(kilometersToMars)} days to get to Mars`);
// console.log(`${spacecraftName} takes ${getDaysToLocation(kilometersToMoon)} days to get to the Moon`);
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    return Spacecraft;
}());
function getDaysToLocation(kilometersAway) {
    var milesAway = kilometersAway * this.milesPerKilometer;
    var hoursToLocation = milesAway / this.speedMph;
    var daysToLocation = hoursToLocation / 24;
    return daysToLocation;
}
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
console.log(spaceShuttle.name + " takes " + spaceShuttle.getDaysToLocation(kilometersToMars) + " days to get to Mars");
console.log(spaceShuttle.name + " takes " + spaceShuttle.getDaysToLocation(kilometersToMoon) + " days to get to Mars");
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
