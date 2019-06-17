'use strict';

module.exports = {
  
  revArray1: array => {
    let back = array.length - 1;
    let front = 0;
    let temp;
    while (front < back) {
      temp = array[front];
      array[front] = array[back];
      array[back] = temp;
      front++;
      back--;
    }
    return array;
  },
  
  stackRevArray: array => {
    const Stack = require('../../data-structures/stacks-and-queues/stack.js');
    let stack = new Stack();
    for(let i = 0; i < array.length; i++) {
      stack.push(array[i]);
      console.log({log: array[i]})
    }
    for(let j = 0; j < array.length; j++) {
      array[j] = stack.pop();
    }
    return array;
  }
}
