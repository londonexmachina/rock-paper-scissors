function playRound() {
    let playerSelection = "Rock";
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        console.log("Draw!");
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
               playerSelection === "Paper" && computerSelection === "Rock" || 
               playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You Win! " + playerSelection + " beats " + computerSelection + "!");
    } else {
        console.log("You Lose! " + computerSelection + " beats " + playerSelection + "!");
    }
}

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

document.getElementById("myBtn").addEventListener("click", playRound);

//function game() {
//    for (let i = 0; i < 5; i++) {
//        let playerSelection = prompt("Your move: rock, paper or scissors?")
//        console.log(playRound(playerSelection, computerPlay()));
//    }
//}