'use strict';

const findSum = (array, value) => {
  const map = new Map();
  if(array.length > 1 && typeof value === 'number') {
    for(let i = 0; i < array.length; i++) {
      if(typeof array[i] === 'number') {
        map.set(array[i], i);
      }
    }
    console.log(map)
    for(let k = 0; k < array.length; k++) {
      let remainder = value - array[k];
      if (map.has(remainder) && map.get(remainder) !== k) {
        return [array[k], remainder]
      }
    }
    return null;
  }
  else return null;
};

module.exports = findSum;