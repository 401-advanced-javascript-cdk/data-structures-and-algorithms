'use strict';

const leftJoin = require('../left-join.js');

const obj1 = {
  'yes': 'yeah',
  'no': 'nah',
  'huh': 'umm'
}
const obj2 = {
  'yes': 'no',
  'huh': 'aha',
  'left': 'right'
}

describe('Left Join Challenge', () => {
  it('returns an array', () => {
    expect(leftJoin(obj1, obj2)).toBeInstanceOf(Array);
  });
  it('the array contains nested arrays', () => {
    const results = leftJoin(obj1, obj2);
    results.forEach(element => {
      expect(element).toBeInstanceOf(Array);
    });
  });
  it('adds the keys of the first object as the first items in the subarrays', () => {
    const results = leftJoin(obj1, obj2);
    expect(results[0][0]).toEqual('yes');
    expect(results[1][0]).toEqual('no');
    expect(results[2][0]).toEqual('huh');
  });
  it('adds the value of the first object as the second items in the subarraya', () => {
    const results = leftJoin(obj1, obj2);
    expect(results[0][1]).toEqual('yeah');
    expect(results[1][1]).toEqual('nah');
    expect(results[2][1]).toEqual('umm');
  });
  it('if it exists, adds the keys of the second object as the third items in the subarrays', () => {
    const results = leftJoin(obj1, obj2);
    expect(results[0][2]).toEqual('no');
    expect(results[2][2]).toEqual('aha');
  });
  it('sets the third item of the subarray to null if that key is not in the second object', () => {
    const results = leftJoin(obj1, obj2);
    expect(results[1][2]).toBeNull();
  });
});