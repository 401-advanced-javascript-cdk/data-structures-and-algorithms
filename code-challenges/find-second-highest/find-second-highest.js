'use strict';

const findSecondHighest = array => {
  if(array.length < 2 || typeof array !== 'object') {
    return null;
  }
  let max = array[0];
  let max2;
  for(let i = 1; i < array.length; i++) {
    if(array[i] > max) {
      max2 = max;
      max = array[i];
    }
    else if (array[i] > max2) {
      max2 = array[i];
    }
  }
  return max2;
  // let var1 = array[0];
  // let var2 = array[1];
  // for (let i = 2; i < array.length; i ++) {
  //   if(array[i] > var1) {
  //     var1 = array[i];
  //     console.log({var1})
  //   }
  //   if(array[i+1] > var2) {
  //     var2 = array[i+1];
  //     console.log({var2})
  //   }
  //   if(var2 = array[array.length - 1]) {
  //     i++
  //   }
  // }
  // if (var1 > var2) {
  //   return var2;
  // }
  // else {
  //   return var1;
  // }
}

module.exports = findSecondHighest;