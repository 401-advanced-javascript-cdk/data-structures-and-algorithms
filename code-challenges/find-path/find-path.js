'use strict';

const LinkedList = require('../../data-structures/linked-list/lib/singly-linked-list.js');
const Tree = require('../../data-structures/trees/tree.js');
const Node = require('../../data-structures/trees/node.js');

const findPath = (tree, start, end) => {
  const findStart = root => {
    if (root.value === start) {
      let list = new LinkedList();
      return findEnd(root, list);
    }
    if(root.left) {
      return findStart(root.left);
    }
    if(root.right) {
      return findStart(root.right);
    }
    return new LinkedList();
  }
  const findEnd = (node, list, prev) => {
    console.log({node})
    if (node && node.value === end) {
      prev.next = node;
      node.next = null;
      return list;
    }
    else {
      if (prev) prev.next = node;
      prev = node; 
      if (node.left) {
        return findEnd(node.left, list, prev);
      }
      if (node.right) {
        return findEnd(node.right, list, prev);
      }
    }
  }
  findStart(tree.root);
  return new LinkedList();
}

module.exports = findPath;