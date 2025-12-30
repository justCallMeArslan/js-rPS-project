
let computerScore = 0;
let humanScore = 0;

// console.log(computerScore);
// console.log(humanScore);


function getComputerChoice(str) {
    const computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 2) {
        return str = "scissors";
    } else if (computerChoice == 1) {
        return str = "paper";
    } else {
        return str = "rock";
    }
}


function getHumanChoice() {
    const userInput = prompt("Rock, Paper or Scissors", "");
    return userInput.toLowerCase();
}


function playRound(computerChoice, humanChoice) { 
    if (computerChoice === "rock" && humanChoice === "scissors"){ // check for Computer-Rock combo
        console.log("Computer wins. Rock beat Scissors");
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("Human wins. Rock loses to Paper");
    } else if (computerChoice === "rock" && humanChoice === "rock") {
        console.log("Its a tie.");
    }

    if (computerChoice === "paper" && humanChoice === "scissors") { // check for Computer-Paper combo
        console.log("Human wins. Paper loses to Scissors.");
    } else if (computerChoice === "paper" && humanChoice === "paper"){
        console.log("Its a tie.");
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("Computer wins. Paper beats Rock.");
    }

    if (computerChoice === "scissors" && humanChoice === "scissors") { //check for Computer-Scissors combo
        console.log("Its a tie."); 
    } else if (computerChoice === "scissors" && humanChoice === "paper"){
        console.log("Computer wins. Scissors beats Paper.");
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("Human wins. Scissors lose to Rock.");
    }

}

const computerSelection = getComputerChoice(); // easier to log
console.log(computerSelection);
const humanSelection = getHumanChoice();
console.log(humanSelection);


playRound(computerSelection, humanSelection);


// write a logic that one parameter beats another //done
// return increment (+1) and log (hC beats cC) of winner 
// in case of a tie return its a tie and dont increment
// 