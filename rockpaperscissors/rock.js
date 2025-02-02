let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const result = document.querySelector(".results");
    result.setAttribute("style", "font-size: 30px");
    if (humanChoice == computerChoice) {
        result.textContent =  `Draw!\r\n ${humanChoice} is equal ${computerChoice}`
        return;
    }
    if ((humanChoice == "ROCK" && computerChoice == "SCISSORS") ||
        (humanChoice == "PAPER" && computerChoice == "ROCK") || 
        (humanChoice == "SCISSORS" && computerChoice == "PAPER")) {
            result.textContent =  `You Win!\r\n ${humanChoice} beats ${computerChoice}`
            humanScore++    
        } else {
            computerScore++
            result.textContent =  `You Lose!\r\n ${humanChoice} beats ${computerChoice}`
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

const ROCK = document.querySelector("img.rock");
const PAPER = document.querySelector("img.paper");
const SCISSORS = document.querySelector("img.scissor");


console.log(`Human ${humanScore} vs Computer ${computerScore}`)

ROCK.addEventListener("click", () => {
    playRound("ROCK", getComputerChoice())
});
ROCK.addEventListener("hover", () => {});

PAPER.addEventListener("click", () => {
    playRound("PAPER", getComputerChoice())
});
SCISSORS.addEventListener("click", () => {
    playRound("SCISSORS", getComputerChoice())
});

