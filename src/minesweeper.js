// Run node minesweeper.js to run this code.

const generatePlayerBoard = (numberOfRows,numberOfColumns) => {
  let board = [];
  for (r = 0; r <= numberOfRows; r++) {
    let row = [];
    for (col = 0; col <= numberOfColumns; col++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

console.log(generatePlayerBoard(3,4));
console.log(generatePlayerBoard(1,10));

const generateBombBoard = (numberOfRows,numberOfColumns,numberOfBombs) => {
  let board = [];
  for (r = 0; r <= numberOfRows; r++) {
    let row = [];
    for (col = 0; col <= numberOfColumns; col++) {
      row.push(null);
    }
    board.push(row);
  }

  // create a variable to store number of Bombs Placed variable.
  let numberOfBombsPlaced = 0;

  // create a loop to place bombs based on numberOfBombs parameter.
  while (numberOfBombsPlaced < numberOfBombs) {
    const randomRowIndex = Math.floor(Math.random() * numberOfRows);
    const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    numberOfBombsPlaced++

    // To-do: This loop allows for bombs to be placed on top of other bombs.
    // Learn control flow and add correction here.
  }

  return board;
};

const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ').join('\n')));
}

const playerBoard = generatePlayerBoard(3,4);
const bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);
