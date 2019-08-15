'use strict';

const treeIntersection = require('../tree-intersections.js');
const Tree = require('../../../data-structures/trees/tree.js');
const Node = require('../../../data-structures/trees/node.js');

const tree1 = new Tree('foo');
tree1.root.left = new Node(2);
tree1.root.right = new Node(3);
tree1.root.left.right = new Node(4);
tree1.root.left.left = new Node(5);

const tree2 = new Tree(6);
tree2.root.left = new Node(4);
tree2.root.right = new Node(2);
tree2.root.left.right = new Node(8);
tree2.root.left.left = new Node('foo');

const noMatchesTree = new Tree(111);
noMatchesTree.root.left = new Node(77);
noMatchesTree.root.right = new Node('bar');

describe('Tree Intersection Challenge', () => {
  it('returns an array', () => {
    expect(treeIntersection(tree1, tree2)).toBeInstanceOf(Array);
  });
  it('returns null if no matching values', () => {
    expect(treeIntersection(tree1, noMatchesTree)).toBeNull();
  });
  it('returns intersecting values in an array', () => {
    expect(treeIntersection(tree1, tree2)).toContain('foo');
    expect(treeIntersection(tree1, tree2)).toContain(2);
    expect(treeIntersection(tree1, tree2)).toContain(4);
  });
  it('only contains intersecting values in the array', () => {
    expect(treeIntersection(tree1, tree2)).toContain('foo');
    expect(treeIntersection(tree1, tree2)).toContain(2);
    expect(treeIntersection(tree1, tree2)).toContain(4);
    expect(treeIntersection(tree1, tree2).length).toEqual(3);
  });
});