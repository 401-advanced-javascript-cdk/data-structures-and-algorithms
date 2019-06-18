'use strict';

const find2nd = require('../find-second-highest.js');

describe('Find Second Highest Value in Array', () => {
  it('returns a value', () => {
    let arr = [1,4,5,3,6];
    expect(find2nd(arr)).toBe(5);
  });
  it('returns the second highest value', () => {
    let arr = [1,4,5,3,6];
    expect(find2nd(arr)).toBe(5);
  });
  it('returns null if length is less than two', () => {
    let arr = [1];
    expect(find2nd(arr)).toBeNull();
    let arr2 = [];
    expect(find2nd(arr2)).toBeNull();
  });
  it('returns null if not an array', () => {
    let arr = 'I\'m an array!';
    expect(find2nd(arr)).toBeNull();
  });
});