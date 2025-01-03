// Player score variables
let humanScore = 0;
let computerScore = 0;

// Randomly return rock/paper/scissors
function getComputerChoice() {
    choiceArr = ["rock", "paper", "scissors"];
    return choiceArr[Math.floor(Math.random() * 3)];
}

// Take the user choice and return it
function getHumanChoice() {
    return prompt("Enter your choice", "Rock, Paper, Scissors").toLowerCase();
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    if (
        !humanChoice ||
        (humanChoice !== "rock" &&
            humanChoice !== "paper" &&
            humanChoice !== "scissors")
    ) {
        alert("Enter a valid choice!");
    } else if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(
            `You win! ${
                humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
            } beats ${computerChoice}`
        );
    } else {
        computerScore++;
        console.log(
            `You Lose! ${
                computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
            } beats ${humanChoice}`
        );
    }
}

// Play 5 rounds
function playgame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(humanScore, computerScore);
    }

    // Show results of the game
    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game!🥳`);
    } else if (humanScore < computerScore) {
        console.log(`Sorry, you lost the game😭`);
    } else {
        console.log("No one won this game!");
    }
}

playgame();
