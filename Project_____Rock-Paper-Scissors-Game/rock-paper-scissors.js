function game(playerTurn) {
  const rock = "Rock";
  const paper = "Paper";
  const scissors = "Scissors";

//   let playerTurn;

  if (playerTurn == "r" || playerTurn == "rock") {
    playerTurn = rock;
    console.log('You choose Rock');
  } else if (playerTurn == "p" || playerTurn == "paper") {
    playerTurn = paper;
    console.log('You choose Paper');
  } else if (playerTurn == "s" || playerTurn == "scissors") {
    playerTurn = scissors;
    console.log('You choose Scissors');
  } else {
    console.log("Invalid input. Try again...");
  }

  let computerRandomNumber = Math.floor(Math.random() * 3) + 1;

  let computerTurn;
  switch (computerRandomNumber) {
    case 1:
      computerTurn = rock;
      break;
    case 2:
      computerTurn = paper;
      break;
    case 3:
      computerTurn = scissors;
      break;
  }

  console.log(`The computer chooses ${computerTurn}`);

  if (
    (playerTurn === rock && computerTurn === scissors) ||
    (playerTurn === paper && computerTurn === rock) ||
    (playerTurn === scissors && computerTurn === paper)
  ) {
    console.log("You win!");
  } else if (
    (playerTurn === rock && computerTurn === paper) ||
    (playerTurn === paper && computerTurn === scissors) ||
    (playerTurn === scissors && computerTurn === rock)
  ) {
    console.log("You lose!");
  } else if (
    (playerTurn === rock && computerTurn === rock) ||
    (playerTurn === paper && computerTurn === paper) ||
    (playerTurn === scissors && computerTurn === scissors)
  ) {
    console.log("This game is a draw!");
  }
}

game('d');