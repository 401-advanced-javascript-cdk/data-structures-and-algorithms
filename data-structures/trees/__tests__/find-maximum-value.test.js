'use strict';

const findMax = require('../find-maximum-value.js');
const Tree = require('../tree.js');
const Node = require('../node.js');


describe('findMax function', () => {
  it('is a function', () => {
    expect(typeof findMax).toBe('function');
  });
  it('returns root value if the tree is only a root node with no children', () => {
    let tree = new Tree(5);
    expect(findMax(tree.root)).toBe(5);
  });
  it('returns the largest value in a tree', () => {
    let tree = new Tree(5);
    tree.root.left = new Node(4);
    tree.root.left.right = new Node(9);
    tree.root.left.right.right = new Node(11);
    expect(findMax(tree.root)).toBe(11);
  });
  it('returns null if there\'s no numbers in the tree', () => {
    let tree = new Tree('one');
    tree.root.left = new Node('two');
    tree.root.left.right = new Node('three');
    tree.root.left.right.right = new Node('four');
    expect(findMax(tree.root)).toBeNull();
  });
});