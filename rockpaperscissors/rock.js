let humanScore = 0;
let computerScore = 0;
const score = document.querySelector(".score");
score.setAttribute("style", "font-size: 30px");
const ROCK = document.querySelector("img.rock");
const PAPER = document.querySelector("img.paper");
const SCISSORS = document.querySelector("img.scissor");
const result = document.querySelector(".result");

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        result.textContent =  `Draw!\r\n Your choice: ${humanChoice}, is the same to ${computerChoice}`
        score.textContent =  `Human: ${humanScore} vs Computer: ${computerScore}`
        return;
    } else if((humanChoice == "ROCK" && computerChoice == "SCISSORS") ||
        (humanChoice == "PAPER" && computerChoice == "ROCK") || 
        (humanChoice == "SCISSORS" && computerChoice == "PAPER")) {
            result.textContent =  `You Win!\r\n ${humanChoice} beats ${computerChoice}`
            humanScore++;
    } else {
        computerScore++;
        result.textContent =  `You Lose!\r\n ${computerChoice} beats ${humanChoice}`
    }
    score.textContent =  `Human: ${humanScore} vs Computer: ${computerScore}`
}

function checkScore() {
    if (humanScore < 5 && computerScore < 5) {
        return true;
    } else {
        if ( humanScore > computerScore) {
            score.textContent =  `GAME OVER! You win. Human: ${humanScore} vs Computer: ${computerScore}`
        } else {
            score.textContent =  `GAME OVER! Computer Wins. Human: ${humanScore} vs Computer: ${computerScore}`
        }
        return false;
    }
}

const getComputerChoice = () => {
    let computerInput = Math.random();
    if (computerInput < 0.33) {
        return "ROCK";
    } else if (computerInput < 0.66) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

ROCK.addEventListener("click", () => {
    if (!checkScore()) {
        return;
    }
    playRound("ROCK", getComputerChoice())
});

PAPER.addEventListener("click", () => {
    if (!checkScore()) {
        return;
    }
    playRound("PAPER", getComputerChoice())
});

SCISSORS.addEventListener("click", () => {
    if (!checkScore()) {
        return;
    }
    playRound("SCISSORS", getComputerChoice())
});

const reset_button = document.createElement("button");
reset_button.textContent = "Play Again";
reset_button.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    score.textContent = "waiting...";
    result.textContent = "";
});
document.body.appendChild(reset_button);



