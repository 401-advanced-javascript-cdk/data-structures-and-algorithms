'use strict';

const treeIntersections = (tree1, tree2) => {

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

  const _getTreeNodes = (node, treeNodes = {}) => {
    if (!node) {
      return null;
    }
    treeNodes[node.value] = true;
    _getTreeNodes(node.left, treeNodes);
    _getTreeNodes(node.right, treeNodes);
    return treeNodes;
  };

  if (!tree1 || !tree2) {
    return null;
  }
  const treeNodes = _getTreeNodes(tree1.root);
  return _findCommonValues(tree2.root, treeNodes);
};
  
module.exports = treeIntersections;