const choices = ['rock', 'paper', 'scissor'];

// Computer Selects
function computerPlay() {
const randomIndex = Math.floor(Math.random() * choices.length);
return choices[randomIndex];
}

// Player Selects
function playerPlay() {
const playerChoice = prompt("Enter rock, paper, or scissor:").toLowerCase();
if (choices.includes(playerChoice)) {
return playerChoice;
} else {
alert("Invalid choice! Please select rock, paper, or scissor.");
return playerPlay();
}
}

// Determine Winner
function determineWinner(playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
return "It's a tie!";
} else if (
(playerSelection === 'rock' && computerSelection === 'scissor') ||
(playerSelection === 'paper' && computerSelection === 'rock') ||
(playerSelection === 'scissor' && computerSelection === 'paper')
) {
return "You win!";
} else {
return "Computer wins!";
}
}

// Play Game
function playGame() {
const playerSelection = playerPlay();
const computerSelection = computerPlay();
console.log(`You chose: ${playerSelection}`);
console.log(`Computer chose: ${computerSelection}`);
console.log(determineWinner(playerSelection, computerSelection));
}

// Start the game
playGame();