'use strict';

const findDepth = (node, value, depth = 0) => {
  if (node === null) return null;
  if(node.value === value) return depth;
  
  let left = findDepth(node.left, value, depth + 1);
  let right = findDepth(node.right, value, depth + 1);
  return left || right;
}

module.exports = findDepth;