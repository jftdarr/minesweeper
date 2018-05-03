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
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

    if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++
    }
  }

  return board;
}

const getNumberOfNeighborBombs = (bombBoard,rowIndex,columnIndex) => {
  const neighborOffsets = [[-1,1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;

  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];
    // Check to be sure that neighboring indeces are valid tiles.
    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
          if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
            numberOfBombs ++;
          }
    }
  });
  return numberOfBombs;
}

const flipTile = (playerBoard,bombBoard,rowIndex,columnIndex) => {
  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    console.log('This tile has already been flipped!');
    return;
  } else if (bombBoard[rowIndex][columnIndex] === 'B') {
    playerBoard[rowIndex][columnIndex] = 'B';
  } else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard,rowIndex,columnIndex);
  }
}

const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}

const playerBoard = generatePlayerBoard(3,4);
const bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);

flipTile(playerBoard,bombBoard,0,0);

console.log('Updated Player Board:');
printBoard(playerBoard);
