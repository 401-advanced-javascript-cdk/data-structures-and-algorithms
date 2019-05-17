'use strict';

const arrayReverse = (arr) => {
  let newArr = [];
  let iterator = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr[iterator] = arr[i];
    iterator++;
  }
  return newArr;
}