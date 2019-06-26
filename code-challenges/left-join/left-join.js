'use strict';

const leftJoin = (obj1, obj2) => {
  const results = [];
  Object.keys(obj1).forEach(key => {
    const arr = [];
    arr.push(key, obj1[key]);
    if(obj2[key]) {
      arr.push(obj2[key]);
    }
    else {
      arr.push(null);
    }
    results.push(arr);
  });
  return results;
}

module.exports = leftJoin;