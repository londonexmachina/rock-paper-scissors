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

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        document.getElementsByClassName("results")[0].textContent = 'Draw!';
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
               playerSelection === "Paper" && computerSelection === "Rock" || 
               playerSelection === "Scissors" && computerSelection === "Paper") {
        document.getElementsByClassName("results")[0].textContent = "You win! " + playerSelection + " beats " + computerSelection + "!";
    } else {
        document.getElementsByClassName("results")[0].textContent = "You lose " + computerSelection + " beats " + playerSelection + "!";
    }
}

const results = document.getElementById("results");

const rock = document.getElementById("Rock");
rock.addEventListener("click", (evt) => playRound("Rock"));

const paper = document.getElementById("Paper");
paper.addEventListener("click", (evt) => playRound("Paper"));

const scissors = document.getElementById("Scissors");
scissors.addEventListener("click", (evt) => playRound("Scissors"));

//document.getElementById("myBtn").addEventListener("click", playRound);

//function game() {
//    for (let i = 0; i < 5; i++) {
//        let playerSelection = prompt("Your move: rock, paper or scissors?")
//        console.log(playRound(playerSelection, computerPlay()));
//    }
//}