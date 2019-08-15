'use strict';

const treeIntersections = (tree1, tree2) => {

  const _getTreeNodeValues = (node, treeNodes = {}) => {
    if (!node) {
      return null;
    }
    treeNodes[node.value] = true;
    _getTreeNodeValues(node.left, treeNodes);
    _getTreeNodeValues(node.right, treeNodes);
    return treeNodes;
  };

  const _findCommonValues = (node, treeNodes, array = []) => {
    if (!node) return null;
    if (treeNodes[node.value]) {
      array.push(node.value);
    }
    _findCommonValues(node.left, treeNodes, array);
    _findCommonValues(node.right, treeNodes, array);
    if (array.length === 0) {
      return null;
    }
    else {
      return array;
    }
  };

  if (!tree1.root || !tree2.root) {
    return null;
  }
  const treeNodes = _getTreeNodeValues(tree1.root);
  return _findCommonValues(tree2.root, treeNodes);
};
  
module.exports = treeIntersections;