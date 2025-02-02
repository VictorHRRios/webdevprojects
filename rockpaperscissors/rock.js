var humanScore = 0;
var computerScore = 0;


function getHumanChoice(){
    return String(prompt("Please enter your decision: ")).toUpperCase();
}
function getComputerChoice(){
    if (Math.random() < 0.33) {
        return "ROCK";
    } else if (0.66 >Math.random() >= 0.33) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Draw!")
        return
    }
    switch (humanChoice) {
        case "ROCK":
            if (computerChoice == "PAPER") {
                computerScore++
                console.log("You Lose!")
            } else {
                console.log("You Win!")
                humanScore++    
            }
            break;
        case "PAPER":
            if (computerChoice == "SCISSORS") {
                computerScore++
                console.log("You Lose!")
            } else {
                console.log("You Win!")
                humanScore++          
            }
            break;
        case "SCISSORS":
            if (computerChoice == "ROCK") {
                computerScore++
                console.log("You Lose!")
            } else {
                console.log("You Win!")
                humanScore++              
            }
            break;
        default:
            console.log("Incorrect Value")
            break;
    }
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(); 
        playRound(humanSelection, computerSelection);
    }
}

playGame()
console.log(humanScore)
console.log(computerScore)

