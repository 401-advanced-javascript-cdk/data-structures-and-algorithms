const funcs = require('../array-challenges.js');

describe('While Loop method', () => {
  it('returns a reversed array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(funcs.revArray1(arr)).toEqual([5, 4, 3, 2, 1]);
  });
});

describe('Stack method', () => {
  it('returns a reversed array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(funcs.stackRevArray(arr)).toEqual([5, 4, 3, 2, 1]);
  });
});
