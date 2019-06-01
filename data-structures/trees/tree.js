'use strict';

const Node = require('./node.js');

class BinaryTree {
  constructor(root) {
    this.root = new Node(root);
  }

  preOrder() {
    const result = [];

    const _next = (node, array) => {
      if (node === null) {
        return;
      }
      array.push(node.value);
      _next(node.left, result);
      _next(node.right, result);
    }

    _next(this.root, result);
    return result;
  }

  inOrder() {
    const result = [];

    const _next = (node, array) => {
      if (node === null) {
        return;
      }
      _next(node.left, result);
      array.push(node.value);
      _next(node.right, result);
    }
    
    _next(this.root, result);
    return result;
  }

  postOrder() {
    const result = [];

    const _next = (node, array) => {
      if (node === null) {
        return;
      }
      _next(node.left, result);
      _next(node.right, result);
      array.push(node.value)
    }

    _next(this.root, result);
    return result;
  }
}

module.exports = BinaryTree