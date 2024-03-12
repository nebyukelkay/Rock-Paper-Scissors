// function to get computer random selection
function getComputerChoice(){
    let parametrs=["rock","paper","scissors"];
    let randomIndex= Math.floor(Math.random()*parametrs.length);
    let selectedItem= parametrs[randomIndex];
    return selectedItem;
   
}

// function to play the game by takeing playerselection and computerselection as parameter

function playRound(computerSelection, playerSelection){
    playerSelection.toLowerCase();
    
    if(computerSelection===playerSelection){
        console.log("tie");
    }
    if(computerSelection==="rock"&&playerSelection==="paper"){
        console.log("you win by paper!")
    }
    if(computerSelection==="rock"&&playerSelection==="scissors"){
        console.log("you lose for scissors!")
    }
    if(computerSelection==="paper"&&playerSelection==="rock"){
        console.log("you lose for rock")
    }
    if(computerSelection==="paper"&&playerSelection==="scissors"){
        console.log("you win by scissors!")
    }
    if(computerSelection==="scissors"&&playerSelection==="paper"){
        console.log("you lose for scissors!")
    }if(computerSelection==="scissors"&&playerSelection==="rock"){
        console.log("you win by rock");
    }
}
let computerSelection=getComputerChoice();
let playerSelection="scissors";
playRound(computerSelection, playerSelection);
