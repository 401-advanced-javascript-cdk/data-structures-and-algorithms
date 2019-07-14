const LinkedList = require('../../../data-structures/linked-list/singly-linked-list.js');
const Tree = require('../../../data-structures/trees/tree.js');
const Node = require('../../../data-structures/trees/node.js');

const findPath = require('../find-path.js');

const makeTree = () => {
  const tree = new Tree(1);
  tree.root.left = new Node(2);
  tree.root.left.left = new Node(4);
  tree.root.left.right = new Node(3);
  return tree;
};

describe('find-path challenge', () => {
  it('returns a linked list', () => {
    const tree = makeTree();
    expect(findPath(tree, 1, 4)).toBeInstanceOf(LinkedList);
  });
  it('returns empty tree if path not found', () => {
    const tree = makeTree();
    expect(findPath(tree, 1, 999)).toEqual({ head: null });
  });
  xit('returns a linked list with the path between the values', () => {
    const tree = makeTree();
    expect(findPath(tree, 1, 4)).toEqual(
      {
        head:
        {
          data: 1,
          next:
          {
            data: 2,
            next:
            { data: 4, next: null },

          },
        },
      },
    );
  });
});
