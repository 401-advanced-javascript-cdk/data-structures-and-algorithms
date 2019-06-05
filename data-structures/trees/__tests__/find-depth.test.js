'use strict';

const findDepth = require('../find-depth.js');
const Tree = require('../tree.js');
const Node = require('../node.js');

describe('findDepth function', () => {
  it('is a function', () => {
    expect(typeof findDepth).toBe('function');
  });
  it('returns 0 if the root is the value being searched', () => {
    let tree = new Tree(5);
    expect(findDepth(tree.root, 5)).toBe(0);
  });
  it('returns the depth of a matching node\'s value', () => {
    let tree = new Tree(5);
    tree.root.left = new Node(4);
    tree.root.left.right = new Node(9);
    tree.root.left.right.right = new Node(11);
    expect(findDepth(tree.root, 11)).toBe(3);
  });
  it('returns null if the value isn\'t found', () => {
    let tree = new Tree(5);
    tree.root.left = new Node(4);
    tree.root.left.right = new Node(9);
    tree.root.left.right.right = new Node(11);
    expect(findDepth(tree.root, 999)).toBeNull();
  });
});