let humanScore = 0;
let computerScore = 0;

function getComputerChoice(max) {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * max)];
}

function getHumanChoice() {
    const choice = prompt("What do u choose").toLowerCase();
    return choice
}

function playRound(human, computer) {
    console.log(`You chose: ${human} `);
    console.log(`Computer chose: ${computer}`)

    if (human === computer) {
        console.log("It's a Tie!")
    }
    else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        console.log("You win this round!");
        humanScore++
    }
    else {
        console.log("Computer wins this round!");
        computerScore++;
    }

    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(3);
        playRound(humanSelection, computerSelection);
    }
    if (humanScore>computerScore) {
        console.log("You Win!")
        console.log(`The score was ${humanScore} : ${computerScore}`)
    }
    else {
        console.log("Computer Wins!")
        console.log(`The score was ${humanScore} : ${computerScore}`)
    }
}

playGame()






