// Game Elements
const gameboard = document.querySelector(".gameboard");
const score = document.querySelector(".score");
const humanScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");
const computerSelectionImg = document.getElementById("computer-selection");
const resultsPopup = document.querySelector(".results");
const resultsText = document.querySelector(".results h2");

// Buttons
const selectionBtn = document.querySelectorAll(".player-selection button");
const restartBtn = document.querySelectorAll(".btn-restart");

let humanScore = 0;
let computerScore = 0;

// Button Event Listeners
selectionBtn.forEach((btn) => {
    btn.addEventListener("click", playGame);
});

restartBtn.forEach((btn) => {
    btn.addEventListener("click", restart);
});

// Retrieve player's selection
function getHumanChoice(e) {
    // Emphasize the img corresponding to the selection
    selectionBtn.forEach((btn) => {
        btn.disabled = true;
        btn.style.opacity = 0.5;
    });
    e.target.parentElement.style.opacity = 1;

    return e.target.alt;
}

// Generate computer's random selection
function getComputerChoice() {
    selectionArr = ["rock", "paper", "scissors"];
    let computerSelection = selectionArr[Math.floor(Math.random() * 3)];
    computerSelectionImg.src = `images/${computerSelection}.png`;
    return computerSelection;
}

// Compare the results for the round
function playRound(humanChoice, computerChoice) {
    const para = document.createElement("p");
    score.appendChild(para);
    if (humanChoice === computerChoice) {
        para.textContent = "It's a tie!";
        console.log("tie", humanChoice, computerChoice);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        para.textContent = `You win! ${
            humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
        } beats ${computerChoice}`;
        humanScore++;
        humanScoreText.textContent = humanScore;
        console.log("win", humanChoice, computerChoice);
    } else {
        para.textContent = `You Lose! ${
            computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        } beats ${humanChoice}`;
        computerScore++;
        computerScoreText.textContent = computerScore;
        console.log("lose", humanChoice, computerChoice);
    }
}

// Execute gameplay with human selection and computer selection
function playGame(e) {
    let humanSelection = getHumanChoice(e);
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    setTimeout(() => {
        newRound();
    }, 1000);

    // If either Player or Computer scores 5 > end the game
    if (humanScore === 5 || computerScore === 5) {
        newRound();
        gameboard.style.opacity = 0.5;
        resultsPopup.style.display = "block";
        resultsText.textContent = `${
            humanScore === 3
                ? "You won the game! 🥳"
                : "Sorry, you lost the game 😭"
        }`;
    }
}

// Function to start a new round
function newRound() {
    selectionBtn.forEach((btn) => {
        btn.disabled = false;
        btn.style.opacity = 1;
    });
    computerSelectionImg.src = "images/robot.svg";
    if (score.lastChild.tagName == "P") {
        score.removeChild(score.lastChild);
    }
}

// Function to reset to default state
function restart() {
    humanScore = 0;
    computerScore = 0;
    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;
    resultsPopup.style.display = "none";
    gameboard.style.opacity = 1;
    newRound();
}
