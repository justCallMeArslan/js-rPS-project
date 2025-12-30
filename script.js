function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    if(computerChoice == 2){
        return console.log("Scissors");
    } else if (computerChoice == 1) {
        return console.log("Paper");
    } else {
        return console.log("Rock");
        
    }
}

getComputerChoice();


function getHumanChoice() {
    
}