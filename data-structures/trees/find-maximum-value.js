'use strict';

const Queue = require('../stacks-and-queues/queue.js');

const findMax = (root) => {
  let temp;
  const q = new Queue();
  q.enqueue(root);
  while(q.peek() !== null) {
    let node = q.dequeue();
    if(node.left) q.enqueue(node.left);
    if(node.right) q.enqueue(node.right);
    if(typeof temp !== 'number') temp = node.value;
    if(node.value > temp) temp = node.value;
  }
  return temp;
}

module.exports = findMax;

console.log(findMax(tree.root));