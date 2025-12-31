

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

function playGame() {

    let roundsPlayed = 0;
    const totalNumberOfRounds = 5;

    let computerScore = 0;
    let humanScore = 0;

    while (roundsPlayed < totalNumberOfRounds) {


        function playRound(computerChoice, humanChoice) {


            if (computerChoice === "rock" && humanChoice === "scissors") { // check for Computer-Rock combo
                computerScore++;
                // console.log("Computer wins. Rock beat Scissors");
            } else if (computerChoice === "rock" && humanChoice === "paper") {
                humanScore++;
                // console.log("Human wins. Rock loses to Paper");
            } else if (computerChoice === "rock" && humanChoice === "rock") {
                // console.log("Its a tie.");
            }

            if (computerChoice === "paper" && humanChoice === "scissors") { // check for Computer-Paper combo
                humanScore++;
                // console.log("Human wins. Paper loses to Scissors.");
            } else if (computerChoice === "paper" && humanChoice === "paper") {
                // console.log("Its a tie.");
            } else if (computerChoice === "paper" && humanChoice === "rock") {
                computerScore++;
                // console.log("Computer wins. Paper beats Rock.");
            }

            if (computerChoice === "scissors" && humanChoice === "scissors") { //check for Computer-Scissors combo
                // console.log("Its a tie.");
            } else if (computerChoice === "scissors" && humanChoice === "paper") {
                computerScore++;
                // console.log("Computer wins. Scissors beats Paper.");
            } else if (computerChoice === "scissors" && humanChoice === "rock") {
                humanScore++;
                // console.log("Human wins. Scissors lose to Rock.");
            }

            // console.log(computerScore);
            // console.log(humanScore);


        }


        const computerSelection = getComputerChoice(); // easier to log
        // console.log(computerSelection);
        const humanSelection = getHumanChoice();
        // console.log(humanSelection);


        playRound(computerSelection, humanSelection);

        roundsPlayed++;
        alert(`End of round ${roundsPlayed}!`)
    }

    if (computerScore > humanScore) {
        alert(`Score is Computer ${computerScore} : ${humanScore} Human. Computer wins the game!`);
    } else if (computerScore < humanScore) {
        alert(`Score is Computer ${computerScore} : ${humanScore} Human. Human wins the game!`);
    } else {
        alert(`Score is Computer ${computerScore} : ${humanScore} Human. It's a tie game.`)
    }
}

playGame();



