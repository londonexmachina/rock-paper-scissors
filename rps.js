function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
    }
}

function resetAll(computerScore, playerScore) {
    if (computerScore == 6) {
        document.getElementsByClassName("results")[0].textContent = '';
        document.getElementsByClassName("winner")[0].textContent = '';
    } else if (playerScore == 6) {
        document.getElementsByClassName("results")[0].textContent = '';
        document.getElementsByClassName("winner")[0].textContent = '';
    } else {
        //do nothing
    }
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        results[0].textContent = 'Draw!';
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
               playerSelection === "Paper" && computerSelection === "Rock" || 
               playerSelection === "Scissors" && computerSelection === "Paper") {
            results[0].textContent = "You win! " + playerSelection + " beats " + computerSelection + "!";
            playerScore++;
    } else {
        results[0].textContent = "You lose " + computerSelection + " beats " + playerSelection + "!";
        computerScore++;
    }
    roundResult(computerScore, playerScore);
    scores(computerScore, playerScore);
    resetAll(computerScore, playerScore);
}

function scores(computerScore, playerScore) {
    document.getElementsByClassName("wins")[0].textContent = "Won: " + playerScore;
    document.getElementsByClassName("losses")[0].textContent = "Lost: " + computerScore;
}

function roundResult(computerScore, playerScore) {
    if (computerScore == 5) {
        document.getElementsByClassName("winner")[0].textContent = "Computer wins!";
    } else if (playerScore == 5) {
        document.getElementsByClassName("winner")[0].textContent = "Player wins!";
    }
}

const rock = document.getElementById("Rock");
rock.addEventListener("click", (evt) => playRound("Rock"));

const paper = document.getElementById("Paper");
paper.addEventListener("click", (evt) => playRound("Paper"));

const scissors = document.getElementById("Scissors");
scissors.addEventListener("click", (evt) => playRound("Scissors"));

const results = document.getElementsByClassName("results");

//const reset = document.getElementById("reset");
//reset.addEventListener("click", resetAll);

//document.getElementById("myBtn").addEventListener("click", playRound);