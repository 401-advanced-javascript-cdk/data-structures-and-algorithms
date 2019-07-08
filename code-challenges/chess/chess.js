'use strict';

const findPieces = (boardArray) => {
  let king = [];
  let bishop = [];
  let rook = [];
  for(let x = 0; x < boardArray.length; x++) {
    for(let y = 0; y < boardArray.length; y++) {
      if(boardArray[x][y] === 'K') {
        king = [x, y];
      }
      else if(boardArray[x][y] === 'B') {
        bishop = [x, y];
      }
      else if(boardArray[x][y] === 'R') {
        rook = [x, y];
      }
    }
  }
  return {king, bishop, rook}
};

const checkDiagonals = (king, otherPieceX, otherPieceY, otherPiece) => {
  if(king[0] === otherPieceX && king[1] === otherPieceY) {
    return true;
  }
  else if(!otherPiece.upLeft) {
    if(otherPieceX < 9 && otherPieceY < 9) {
      return checkDiagonals(king, otherPieceX + 1, otherPieceY + 1, otherPiece);
    }
    else {
      otherPiece.upLeft = 'checked';
      return checkDiagonals(king, otherPiece[0], otherPiece[1], otherPiece)
    }
  }
  else if(!otherPiece.downLeft){
    if(otherPieceX >= 0 && otherPieceY < 9) {
      return checkDiagonals(king, otherPieceX - 1, otherPieceY + 1, otherPiece);
    }
    else {
      otherPiece.downLeft = 'checked';
      return checkDiagonals(king, otherPiece[0], otherPiece[1], otherPiece)
    }
  }
  else if(!otherPiece.upRight) {
    if(otherPieceX < 9 && otherPieceY >= 0) {
      return checkDiagonals(king, otherPieceX + 1, otherPieceY - 1, otherPiece);
    }
    else {
      otherPiece.upRight = 'checked';
      return checkDiagonals(king, otherPiece[0], otherPiece[1], otherPiece)
    }
  }
  else if(!otherPiece.downRight) {
    if(otherPieceX >= 0 && otherPieceY >= 0) {
      return checkDiagonals(king, otherPieceX - 1, otherPieceY - 1, otherPiece);
    }
    else {
      otherPiece.downRight = 'checked';
      return checkDiagonals(king, otherPiece[0], otherPiece[1], otherPiece);
    }
  }
  else {
    return false;
  }
}


const checkForWinningMoves = boardArray => {
  let pieces = {};
  pieces = findPieces(boardArray);
  if(pieces.rook[1] === pieces.king[0] || pieces.rook[1] === pieces.king[1] ||
    pieces.rook[0] === pieces.king[0] || pieces.rook[0] === pieces.king[1]) {
      return true;
    }
  return checkDiagonals(pieces.king, pieces.bishop[0], pieces.bishop[1], pieces.bishop) ? true : false
}

module.exports = {
  checkForWinningMoves,
  checkDiagonals,
  findPieces
};