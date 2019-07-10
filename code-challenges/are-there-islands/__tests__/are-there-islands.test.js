'use strict';

const areThereIslands = require('../are-there-islands');

let graph = {
  adjacencyList: {
    A: {head: {value: 'C', next: null}},
    B: {head: {value: 'D', next: {value: 'E', next: null}}},
    C: {head: {value: 'B', next: null}},
    D: {head: {value: 'A', next: {value: 'C', next: null}}},
    E: {head: null, next: null},
    F: {head: null, next: null}
  }
}

describe('areThereIslands', () => {
  it('returns a boolean', () => {
    expect(typeof areThereIslands(graph)).toBe('boolean');
  });
  it('returns true if there are any islands in the graph', () => {
    expect(areThereIslands(graph)).toBe(true);
  });
  it('returns false if there are no islands in the graph', () => {
    graph.adjacencyList.F = {head: {value: 'B', next: null}};
    expect(areThereIslands(graph)).toBe(false);
  });
});