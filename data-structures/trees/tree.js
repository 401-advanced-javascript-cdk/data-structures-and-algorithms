'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

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

let b = new BinaryTree(1);
b.root.left = new Node(2);
b.root.right = new Node(3);
b.root.left.left = new Node(4);
b.root.left.right = new Node(5);
b.root.right.left = new Node(6);
b.root.right.right = new Node(7);

console.log({tree: b});

let preOrder = b.preOrder();
let inOrder = b.inOrder();
let postOrder = b.postOrder();

console.log({preOrder, inOrder, postOrder});

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
  }

  add(value) {

    const _next = root => {

      if (value < root.value) {
        (console.log(`${value} is lower than ${root.value}, going left`))
        if(root.left === null) {
          root.left = new Node(value);
          return;
        } else { _next (root.left) };
      }

      else if (value > root.value) {
        (console.log(`${value} is higher than ${root.value}, going right`))
        if(root.right === null) {
          root.right = new Node(value);
          return;
        } else { _next(root.right) };
      }    
    }
    _next(this.root);
  }
}

module.exports = {BinaryTree, BinarySearchTree};