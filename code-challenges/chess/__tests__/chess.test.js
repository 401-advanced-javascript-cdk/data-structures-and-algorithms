'use strict';

const { checkForWinningMoves, checkDiagonals, findPieces } = require('../chess.js');

let boardArray = [
  ['','','','','','','',''],
  ['Q','','','','','','',''],
  ['','','','','','','B',''],
  ['','','','','','','',''],
  ['','','','K','','','',''],
  ['','','','','','','',''],
  ['','','','','','','R',''],
  ['','Kn','','','','','',''],
]

describe('Chess Challenge', () => {
  describe('findPieces', () => {
    it('returns an object', () => {
      expect(findPieces(boardArray)).toBeInstanceOf(Object);
    });
    it('the object has a king, bishop, and rook', () => {
      const result = findPieces(boardArray);
      expect(result.king).toBeDefined();
      expect(result.bishop).toBeDefined();
      expect(result.rook).toBeDefined();
    });
    it('Returns a 2 element array with coordinates for each piece', () => {
      const result = findPieces(boardArray);
      expect(result.king).toEqual([4,3]);
      expect(result.bishop).toEqual([2,6]);
      expect(result.rook).toEqual([6,6]);
    })
  });
  describe('checkDiagonals', () => {
    it('returns a boolean', () => {
      const king = [4,3];
      const bishop = [2,6];
      expect(typeof checkDiagonals(king, bishop[0], bishop[1], bishop)).toBe('boolean');
    });
    it('returns false if no capturing move', () => {
      const king = [4,3];
      const bishop = [2,6];
      expect(checkDiagonals(king, bishop[0], bishop[1], bishop)).toBe(false);
    });
    it('returns true if there is a capturing move', () => {
      const king = [4,3];
      const bishop = [8,7];
      expect(checkDiagonals(king, bishop[0], bishop[1], bishop)).toBe(true);
    });
  })
  describe('checkForWinningMoves', () => {
    it('returns a boolean', () => {
      expect(typeof checkForWinningMoves(boardArray)).toBe('boolean');
    });
    it('returns true if rook can capture king', () => {
      const rookCaptureBoard = 
        [
          ['','','','','','','',''],
          ['Q','','','','','','',''],
          ['','','','','','','B',''],
          ['','','','','','','',''],
          ['','','','K','','','',''],
          ['','','','','','','',''],
          ['','','','','','','',''],
          ['','Kn','','R','','','',''],
        ];
        expect(checkForWinningMoves(rookCaptureBoard)).toBe(true);
    });
    it('returns true if bishop can capture king', () => {
      const bishopCaptureBoard =
      [
        ['','','','','','','','B'],
        ['Q','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','K','','','',''],
        ['','','','','','','',''],
        ['','','','','','','R',''],
        ['','Kn','','','','','',''],
      ];
      expect(checkForWinningMoves(bishopCaptureBoard)).toBe(true);
    });
    it('returns false if no capturing move', () => {
      expect(checkForWinningMoves(boardArray)).toBe(false);
    });
  });
});