let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "ROCK" && computerChoice == "SCISSORS") ||
        (humanChoice == "PAPER" && computerChoice == "ROCK") || 
        (humanChoice == "SCISSORS" && computerChoice == "PAPER")) {
            console.log(`You Win!\n Your choice: ${humanChoice}\n Computer Choice: ${computerChoice}`)
            humanScore++    
        } else {
            computerScore++
            console.log(`You Lose!\n Your choice: ${humanChoice}\n Computer Choice: ${computerChoice}`)
        }
}

const getHumanChoice = () => {
        let userInput;
        do  {
            userInput = prompt("Please enter your decision: ").toUpperCase();
        } while (userInput !== "ROCK" && userInput !== "PAPER" && userInput !== "SCISSORS");
        return userInput;
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

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection;
        let computerSelection;
        do {
            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
            if (humanSelection === computerSelection) {
                console.log(`Draw!\n Your choice: ${humanSelection}\n Computer Choice: ${computerSelection}`)
            }
        } while (humanSelection === computerSelection);
        playRound(humanSelection, computerSelection);
        console.log(`Human ${humanScore} vs Computer ${computerScore}`)
    }
}

playGame()

