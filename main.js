// This will be where the main function to start the game will go
var rps = ["Rock", "Paper", "Scissors"];  // This is the array that holds the 3 viable options

function game(){ //Logic Set for the game itself.
    
}

// Enemy AI func will go here
function computerPlay(){
    randoNum = Math.floor(Math.random() * rps.length); // Randomizes index number based on length of array

    computerChoice = rps[randoNum];  // Takes the randomized number and retrieves the string based on the randomized index number

    return computerChoice;  // Returns the value of the randomized number to the function when called.
}

// Player func will go here
function playerPlay(){
    console.log("What is your choice? Pick between, Rock, Paper, and Scissors.");
    var playerChoice = prompt("Enter your choice.");

    return playerChoice;
}

console.log(playerPlay());

// VV Those are the functions to use in order to randomize the values
// console.log(Math.floor(Math.random() * 7))
