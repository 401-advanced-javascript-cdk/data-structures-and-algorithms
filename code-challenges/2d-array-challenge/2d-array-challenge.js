'use strict'

const findMaxAndMin = twoDArray => {
  let min = null;
  let max = null;
  let minIndex = 0;
  let maxIndex = 999;
  let low;
  let high;
  let index;
  for(let i = 0; i < twoDArray.length - 1; i++) {
    console.log(twoDArray[i]);
    low = 0;
    high = twoDArray[i].length - 1;
    index = Math.floor(twoDArray[i].length / 2);
    while(low !== high && low < high) {
      if(twoDArray[i][index] === 0 && twoDArray[i][index + 1] === 1) { 
        console.log(twoDArray[i][index])
        console.log(twoDArray[i][index+1])
        if(twoDArray[i][index] >= minIndex) {
          console.log({index})
          min = i;
          minIndex = index;
          low = high;
        }
        else if(twoDArray[i][index] < maxIndex) {
          max = i;
          maxIndex = index;
          low = high;
        }
      }
      else {
        if(twoDArray[i][index] === 0) {
          low = index;
          index = Math.floor((low + high) / 2);
        }
        else if (twoDArray[i][index] === 1) {
          high = index;
          index = Math.floor((low + high) / 2);
        }
        else {
          low = high;
        }
      }
    }
  }
  return {min, max}
}

const arr = [[0,0,1,1], [0,0,0,1], [0,0,0,1], [0,1,1,1], [0,0,1,1]]
console.log(findMaxAndMin(arr))