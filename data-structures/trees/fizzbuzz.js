'use strict';

const Tree = require('./tree.js');
const Node = require('./node.js');

const fbt = (root) => {
  if(root === null) return;
  if(root.value % 3 === 0 && root.value % 5 === 0) {
    root.value = 'FizzBuzz';
  }
  else if (root.value % 3 === 0) {
    root.value = 'Fizz';
  }
  else if (root.value % 5 === 0) {
    root.value = 'Buzz';
  }
  fbt(root.left);
  fbt(root.right);
};

module.exports = fbt;