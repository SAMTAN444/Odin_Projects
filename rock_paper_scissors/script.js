
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(max) {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * max)];
}

function playRound(human, computer) {
    const roundResult = document.getElementById("round-result");
    const scoreDisplay = document.getElementById("score");
    const winnerDisplay = document.getElementById("final-winner");

    if (human === computer) {
        roundResult.textContent = `You both chose ${human}. It's a tie!`
    }
    else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        roundResult.textContent = `You  chose ${human}. Computer chose ${computer}. You Win!`
        humanScore++
    }
    else {
        roundResult.textContent = `You  chose ${human}. Computer chose ${computer}. You Lose!`
        computerScore++;
    }

    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    scoreDisplay.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore>computerScore) {
            winnerDisplay.textContent = "You win!"
        }
        else {
            winnerDisplay.textContent = "Computer wins!"
        }
    }
}




const display = document.getElementById("display");
const content = document.createElement('h3');

document.getElementById("rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice(3));
})

document.getElementById("paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice(3));
})

document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice(3));
})




