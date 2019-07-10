'use strict';

const {preOrderDfs, checkChildren} = require('../preorder-dfs.js');

const adjacencyList = {
  A: ['B'],
  B: ['A','C'],
  C: ['B','D','E'],
  D: ['C','H','G'],
  E: ['C','F'],
  F: ['E'],
  G: ['D'],
  H: ['D']
};

describe('Preorder DFS on an adjacency list', () => {
  describe('checkChildren', () => {
    it('returns a string in an array', () => {
      expect(checkChildren({}, [''], 'A', adjacencyList)).toBeInstanceOf(Array);
    });
    it('adds seen vertices to an object', () => {
      let seen = {};
      checkChildren(seen, [''], 'A', adjacencyList);
      expect(Object.keys(seen).length).toBe(8);
    });
    it('returns an output string the same length as the number of vertices', () => {
      let output = [''];
      checkChildren({}, output, 'A', adjacencyList);
      expect(output[0].length).toBe(8);
    });
  });
  describe('preOrderDfs', () => {
    it('outputs a string', () => {
      expect(typeof preOrderDfs(adjacencyList)).toBe('string');
    });
    it('outputs the preOrder DFS of the adjacency list', () => {
      expect(preOrderDfs(adjacencyList)).toBe('ABCDHGEF')
    });
  });
});