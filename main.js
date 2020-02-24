                    // All Global logic will go here.
                    var rps = ["Rock", "Paper", "Scissors"];  // This is the array that holds the 3 viable options

                    function rpsRules(){
                        

                    }

                // Enemy AI func will go here
                    function computerPlay(){
                        randoNum = Math.floor(Math.random() * rps.length); // Randomizes index number based on length of array

                        computerChoice = rps[randoNum];  // Takes the randomized number and retrieves the string based on the randomized index number

                        return toUpperCase(computerChoice);  // Returns the value of the randomized number to the function when called.
                    }

                // Player func will go here
                    function playerPlay(){
                        console.log(`What is your choice? Pick between ${rps[0]}, ${rps[1]}, or $ ${rps[2]}`); // Displays a log for the purpose of the choice. Also give you the list of chooseables.
                        var playerChoice = prompt("Enter your choice."); // Displays the prompt for input text.

                        return toUpperCase(playerChoice);
                    }

                // Base Game Logic Goes Here                                  
                    const computerSelection = computerPlay();
                    const playerSelection = playerPlay();
                
                    function gameStart(playerSelection, computerSelection){
                        if (computerSelection == PAPER && playerSelection == ROCK || computerSelection == ROCK && playerSelection == SCISSOR || computerSelection == SCISSOR && playerSelection == PAPER)
                              return "You Lose!";
                        else
                          return "You Win";
                    }

                    console.log(gameStart(playerSelection, computerSelection));