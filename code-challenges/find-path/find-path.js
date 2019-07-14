/* eslint-disable no-param-reassign */
const LinkedList = require('../../data-structures/linked-list/singly-linked-list.js');

const findPath = (tree, start, end) => {
  // eslint-disable-next-line consistent-return
  const findEnd = (node, list, prev = []) => {
    if (node && node.value === end) {
      prev.forEach((prevNode) => {
        list.append(prevNode);
      });
      return list;
    }


    if (node.left) {
      return findEnd(node.left, list, [...prev, node]);
    }
    if (node.right) {
      return findEnd(node.right, list, [...prev, node]);
    }
  };

  const findStart = (root) => {
    if (root.value === start) {
      const list = new LinkedList();
      list.append(root);
      return findEnd(root, list);
    }
    if (root.left) {
      return findStart(root.left);
    }
    if (root.right) {
      return findStart(root.right);
    }
    return new LinkedList();
  };

  return findStart(tree.root) || new LinkedList();
};

module.exports = findPath;
