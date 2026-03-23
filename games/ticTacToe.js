// Tic Tac Toe Game
const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

let currentPlayer = 'X';

// Display the board
function displayBoard() {
  console.log(board.map(row => row.join(' | ')).join('\n---------\n'));
}

// Check for a win
function checkWin() {
  // Check rows, columns, and diagonals
  for (let i = 0; i < 3; i++) {
    if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return true;
    }
    if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return true;
    }
  }
  if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return true;
  }
  if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return true;
  }
  return false;
}

// Check for a draw
function checkDraw() {
  return board.flat().every(cell => cell !== '');
}

// Make a move
function makeMove(row, col) {
  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
    if (checkWin()) {
      console.log(`Player ${currentPlayer} wins!`);
      displayBoard();
      return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  } else {
    console.log('Cell already occupied. Try again.');
  }
}

// Ask for making move by entering block number like in telephone keypad dtyle (1, 2, 3, 4, 5, 6, 7, 8, 9) and convert it to row and column index
function makeMoveByBlockNumber(blockNumber) {
  const row = Math.floor((blockNumber - 1) / 3);
  const col = (blockNumber - 1) % 3;
  makeMove(row, col);
}

// Computer makes a random move
function computerMove() {
  const emptyCells = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        emptyCells.push([i, j]);
      }
    }
  }
  if (emptyCells.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const [row, col] = emptyCells[randomIndex];
    makeMove(row, col);
  }
}

function startGame() {
  while (true) {
    displayBoard();
    let blockNumber;
    do {
      blockNumber = prompt("Enter a block number (1-9): ");
      const num = parseInt(blockNumber);
      if (isNaN(num) || num < 1 || num > 9) {
        console.log('Invalid input. Enter a number between 1 and 9.');
        blockNumber = null;
        continue;
      }
      const row = Math.floor((num - 1) / 3);
      const col = (num - 1) % 3;
      if (board[row][col] !== '') {
        console.log('Cell already occupied. Try again.');
        blockNumber = null;
      }
    } while (!blockNumber);
    makeMoveByBlockNumber(parseInt(blockNumber));
    if (checkWin()) {
      console.log(`Player ${currentPlayer} wins!`);
      displayBoard();
      break;
    }
    if (checkDraw()) {
      console.log("It's a draw!");
      displayBoard();
      break;
    }
    // Computer move
    console.log("Computer's turn...");
    computerMove();
    if (checkWin()) {
      console.log(`Player ${currentPlayer} wins!`);
      displayBoard();
      break;
    }
    if (checkDraw()) {
      console.log("It's a draw!");
      displayBoard();
      break;
    }
  }
}

// Uncomment the following line to start the game with user input
startGame();