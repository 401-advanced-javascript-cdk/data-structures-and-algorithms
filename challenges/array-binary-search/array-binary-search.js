'use strict';

const arrayBinarySearch = (arr, val) => {
  let low = 0;
  let high = arr.length - 1;
  let middle;

  let foundIt = false;
  
  while (foundIt === false) {
    if (low > high) {
      return -1;
    }
    middle = Math.floor( (low + high) / 2 );
    if (arr[middle] < val) {
      low = middle + 1;
    }
    else if (arr[middle] > val) {
      high = middle - 1;
    }
    else if (arr[middle] === val) {
      foundIt = true;
    }
  }
  return middle;
}

let arr = [1,3,4,8,15,19,26,27,31,34,38,40,45,65,100];

arrayBinarySearch(arr, 8);