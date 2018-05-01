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
