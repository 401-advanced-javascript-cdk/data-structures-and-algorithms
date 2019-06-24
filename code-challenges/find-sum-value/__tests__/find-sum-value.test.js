'use strict';

const findSum = require('../find-sum-value.js');

describe('Find value with sums in array', () => {
  it('returns null if value isn\'t a number', () => {
    expect(findSum([1,2,3,4], 'blah')).toBeNull();
  });
  it('returns null if array is too short', () => {
    expect(findSum([5], 5)).toBeNull();
  });
  it('returns two numbers in an array', () => {
    let result = findSum([1,2,3], 4);
    expect(result.length).toBe(2);
  });
  it('doesn\'t reuse values in array', () => {
    let results = findSum([4,5,3], 8);
    expect(results).not.toEqual([4, 4])
  });
  it('returns correct results', () => {
    let result = findSum([4,5,3], 8);
    expect(result).toEqual([5, 3]);
  });
});