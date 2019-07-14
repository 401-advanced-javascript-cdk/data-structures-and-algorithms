const Stack = require('../../data-structures/stacks-and-queues/stack.js');

module.exports = {

  revArray1: (inputArray) => {
    const array = inputArray;
    let back = array.length - 1;
    let front = 0;
    let temp;
    while (front < back) {
      temp = array[front];
      array[front] = array[back];
      array[back] = temp;
      front += 1;
      back -= 1;
    }
    return array;
  },

  stackRevArray: (inputArray) => {
    const stack = new Stack();
    const array = inputArray;
    for (let i = 0; i < array.length; i += 1) {
      stack.push(array[i]);
    }
    for (let j = 0; j < array.length; j += 1) {
      array[j] = stack.pop();
    }
    return array;
  },
};
