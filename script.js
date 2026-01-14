const restartDiv = document.querySelector("#divToHide");
const showChoiceComp = document.querySelector(".showCompChoice");
const showChoiceHuman = document.querySelector(".showHumanChoice");
const computerCount = document.querySelector(".computerScore");
const humanCount = document.querySelector(".humanScore");

const humanName = prompt("Whats your name, Human?") || "Human";
const changeGamer = document.querySelector("h1");
changeGamer.textContent = `Test your luck, ${humanName}!`;
showChoiceHuman.textContent = `${humanName}'s choice`;
humanCount.textContent = `0 ${humanName}'s score`


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)];
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
        checkGameResult();
        restartDiv.addEventListener("click", () => window.location.reload()); //to reload page when div appears (toggleDiv())
    });
});

function playRound(computerChoice, humanChoice) {

    if (computerChoice === "rock" && humanChoice === "scissors") { // check for Computer-Rock combo
        computerScore++;
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "rock") {
    }

    if (computerChoice === "paper" && humanChoice === "scissors") { // check for Computer-Paper combo
        humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "paper") {
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
    }

    if (computerChoice === "scissors" && humanChoice === "scissors") { //check for Computer-Scissors combo
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
    }
};

function updateScore() {
    computerCount.textContent = `Computer score ${computerScore}`;
    humanCount.textContent = ` ${humanScore} ${humanName}'s score`;
}

const choiceOfEmojis = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
}

function updateChoiceComp(computerChoice) {
    const emojiForCompChoice = choiceOfEmojis[computerChoice];
    showChoiceComp.textContent = `Computer choice is ${emojiForCompChoice}`;
};

function updateChoiceHuman(humanChoice) {
    const emojiForHumanChoice = choiceOfEmojis[humanChoice];
    showChoiceHuman.textContent = ` ${emojiForHumanChoice} is ${humanName}'s choice`;
};

function checkGameResult() {
    if (computerScore < 5 && humanScore < 5) {
        return;
    }
    buttons.forEach(button => button.disabled = true);
    toggleDiv();

    alert(computerScore === 5 ? `Computer WINS. Try again, ${humanName}`
        : `${humanName} WINS. Don't relax, it was pure luck!`
    )
};

function toggleDiv() {
    restartDiv.classList.toggle("visible-div");
};

