const humanName = prompt("Whats your name, Human?");
const changeGamer = document.querySelector("h1");
changeGamer.textContent = `Test your luck, ${humanName}!`;

const changeHumanChoice = document.querySelector(".showHumanChoice");
changeHumanChoice.textContent = `${humanName}'s choice`;

const changeHumanScore = document.querySelector(".humanScore");
changeHumanScore.textContent = `0 ${humanName}'s score`

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
        const computerSelection = getComputerChoice();

        playRound(computerSelection, humanSelection);
        updateScore();
        updateChoiceComp(computerSelection);
        updateChoiceHuman(humanSelection);

        if (computerScore === 5 || humanScore === 5) {
            buttons.forEach(button => {
                button.disabled = true;
                toggleDiv();
                restart();
            });
            if (computerScore === 5) {
                alert("Computer WINS!");
            } else if (humanScore === 5) {
                alert(`${humanName} WINS`);
            } else {
                alert("It is a TIE");
            }
        };
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
    humanCount.textContent = ` ${humanScore} ${humanName}'s score`;
}

const choiceOfEmojis = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
}

function updateChoiceComp(computerChoice) {
    const showChoiceComp = document.querySelector(".showCompChoice");
    const emojiForCompChoice = choiceOfEmojis[computerChoice];
    showChoiceComp.textContent = `Computer choice is ${emojiForCompChoice}`;
};

function updateChoiceHuman(humanChoice) {
    const showChoiceHuman = document.querySelector(".showHumanChoice");
    const emojiForHumanChoice = choiceOfEmojis[humanChoice];
    showChoiceHuman.textContent = ` ${emojiForHumanChoice} is ${humanName}'s choice`;   
};

function toggleDiv() {
    const restartDiv = document.querySelector("#divToHide");
    restartDiv.classList.toggle("visible-div");
};

function restart() {
    const restart = document.querySelector("#divToHide")
    restart.addEventListener("click", () => {
        window.location.reload();
    });
};



