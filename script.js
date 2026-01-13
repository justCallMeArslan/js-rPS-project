function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 2) {
        return "scissors";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "rock";
    }
}


let computerScore = 0;
let humanScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let humanSelection = e.currentTarget.id;
        const computerSelection = getComputerChoice(); // easier to log

        playRound(computerSelection, humanSelection);
        updateScore();

        if (computerScore === 5 || humanScore === 5) {
            buttons.forEach(button => {
                button.disabled = true;
                restart();
            })
            if (computerScore === 5) {
                alert("Computer WINS!");
            } else if (humanScore === 5) {
                alert("Human WINS");
            } else {
                alert("It is a TIE");   
            }
        }

        


    });
});

function playRound(computerChoice, humanChoice) {

    if (computerChoice === "rock" && humanChoice === "scissors") { // check for Computer-Rock combo
        computerScore++;
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "rock") {
        humanScore++;
        computerScore++
    }

    if (computerChoice === "paper" && humanChoice === "scissors") { // check for Computer-Paper combo
        humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "paper") {
        humanScore++;
        computerScore++
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
    }

    if (computerChoice === "scissors" && humanChoice === "scissors") { //check for Computer-Scissors combo
        humanScore++;
        computerScore++
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
    }
};

function updateScore() {
    const computerCount = document.querySelector(".computerScore");
    computerCount.textContent = `Computer score ${computerScore}`;
    const humanCount = document.querySelector(".humanScore");
    humanCount.textContent = `: ${humanScore} Human score`;
}

function updateChoice(){
    // left for the update after merge
}


function restart(){
document.addEventListener("click", () => {
    window.location.reload();
});

};
