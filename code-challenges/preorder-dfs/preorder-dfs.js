'use strict';

const preOrderDfs = (list) => {
  const seen = {};
  let output = [''];
  Object.keys(list).forEach(vertex => {
    checkChildren(seen, output, vertex, list);
  });
  return output[0];
};

const checkChildren = (seen, output, vertex, list) => {
  if(!seen[vertex]) {
    seen[vertex] = true;
    output[0] = output[0] + vertex;
    list[vertex].forEach(child => {
      return checkChildren(seen, output, child, list)
    });
  }
  return output;
};

module.exports = {preOrderDfs, checkChildren};