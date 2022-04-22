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

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        document.getElementsByClassName("results")[0].textContent = 'Draw!';
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
               playerSelection === "Paper" && computerSelection === "Rock" || 
               playerSelection === "Scissors" && computerSelection === "Paper") {
        document.getElementsByClassName("results")[0].textContent = "You win! " + playerSelection + " beats " + computerSelection + "!";
        playerScore++;
    } else {
        document.getElementsByClassName("results")[0].textContent = "You lose " + computerSelection + " beats " + playerSelection + "!";
        computerScore++;
    }
}

function resetAll() {
    document.getElementsByClassName("results")[0].textContent = '';
}

const rock = document.getElementById("Rock");
rock.addEventListener("click", (evt) => playRound("Rock"));

const paper = document.getElementById("Paper");
paper.addEventListener("click", (evt) => playRound("Paper"));

const scissors = document.getElementById("Scissors");
scissors.addEventListener("click", (evt) => playRound("Scissors"));

const results = document.getElementById("results");

const reset = document.getElementById("reset");
reset.addEventListener("click", resetAll);

//document.getElementById("myBtn").addEventListener("click", playRound);