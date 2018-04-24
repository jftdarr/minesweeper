//This code creates the framework for a minesweeper game.
const printBoard = (board) => {
  // Log 'Current Board'
  // Log the first element of the board variable
  console.log('Current Board:');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};
// Create a variable to store the board.
const board = [
  [' ',' ',' '],
  [' ',' ',' '],
  [' ',' ',' ']
];

printBoard(board);

// Update row one, second element equal to 1
board[0][1] = 1;

// Update row one, second element equal to 1
board[2][2] = 'B';

printBoard(board);
