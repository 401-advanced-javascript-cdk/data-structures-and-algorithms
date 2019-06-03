'use strict';

const Tree = require('../tree.js');
const Node = require('../node.js');
const fbt = require('../fizzbuzz.js');

const mockTree = () => {
  let t = new Tree(5);
  tree.root.left = new Node(15);
  tree.root.right = new Node(7);
  tree.root.left.left = new Node(99);
  tree.root.left.right = new Node(10);
  tree.root.right.left = new Node('string');
  tree.root.right.right = new Node(3);
  tree.root.right.left.left = new Node({num: 20});
  return tree;
}

describe('FizzBuzz', () => {
  it('is a function', () => {
    expect(typeof fbt).toBe('function');
  });
  it('changes numbers divisible by 3 to \'Fizz\'', () => {
    let tree = new Tree(3);
    fbt(tree.root);
    expect(tree.root.value).toBe('Fizz');
  });
  it('changes numbers divisible by 5 to \'Buzz\'', () => {
    let tree = new Tree(5);
    fbt(tree.root);
    expect(tree.root.value).toBe('Buzz');
  });
  it('changes numbers divisible by 3 AND 5 to \'FizzBuzz\'', () => {
    let tree = new Tree(15);
    fbt(tree.root);
    expect(tree.root.value).toBe('FizzBuzz');
  });
  it('works on a larger tree', () => {
    let tree = new Tree(5);
    tree.root.left = new Node(15);
    tree.root.right = new Node(7);
    tree.root.left.left = new Node(99);
    tree.root.left.right = new Node(10);
    tree.root.right.left = new Node('string');
    tree.root.right.right = new Node(3);
    tree.root.right.left.left = new Node({num: 20});
    fbt(tree.root);
    const results = tree.preOrder();
    expect(results.toString()).toBe([ 'Buzz',
    'FizzBuzz',
    'Fizz',
    'Buzz',
    7,
    'string',
    { num: 20 },
    'Fizz' ].toString());
  });
});