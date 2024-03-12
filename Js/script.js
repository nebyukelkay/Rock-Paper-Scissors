// Function to get computer random selection
function getComputerChoice() {
  let parametrs = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * parametrs.length);
  let selectedItem = parametrs[randomIndex];
  return selectedItem;
}

// Function to play a round of the game
function playRound(computerSelection, playerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (computerSelection === playerSelection) {
    return "tie";
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    return "player";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return "computer";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return "computer";
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    return "player";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    return "computer";
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    return "player";
  } else {
    return "invalid";
  }
}

// Function to play the game and keep score
function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 5;

  for (let i = 0; i < round; i++) {
    let playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
    let computerSelection = getComputerChoice();

    while (
      playerSelection !== "rock" &&
      playerSelection !== "paper" &&
      playerSelection !== "scissors"&& round<5
    ) {
      console.log("Invalid input! Please enter rock, paper, or scissors:");
      playerSelection = prompt(
        "Enter your choice (rock, paper, or scissors):"
      );
    }

    let result = playRound(computerSelection, playerSelection);

    if (result === "player") {
      playerScore++;
      console.log("You win this round!");
    } else if (result === "computer") {
      computerScore++;
      console.log("Computer wins this round!");
    } else if (result === "tie") {
      console.log("It's a tie!");
    } else {
      console.log("An error occurred. Please try again.");
    }
  }

  console.log("Game over!");

  if (playerScore > computerScore) {
    console.log("Congratulations! You won the game.");
  } else if (playerScore < computerScore) {
    console.log("Sorry, you lost the game.");
  } 
  else {
    console.log("The game ended in a tie.");
  } 
}

// Call the playGame function to start the game
playGame();