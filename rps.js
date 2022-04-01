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

function playRound(playerSelection, computerSelection) {
    let playerUpperCase = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerUpperCase === computerSelection) {
        return "Draw!"
    } else if (playerUpperCase == "Rock" && computerSelection == "Scissors" ||
               playerUpperCase == "Paper" && computerSelection == "Rock" || 
               playerUpperCase == "Scissors" && computerSelection == "Paper") {
        return "You Win! " + playerUpperCase + " beats " + computerSelection + "!"
    } else {
        return "You Lose! " + computerSelection + " beats " + playerUpperCase + "!"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Your move: rock, paper or scissors?")
        console.log(playRound(playerSelection, computerPlay()));
    }
}