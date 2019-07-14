const findDepth = (node, value, depth = 0) => {
  if (node === null) return null;
  if (node.value === value) return depth;

  const left = findDepth(node.left, value, depth + 1);
  const right = findDepth(node.right, value, depth + 1);
  return left || right;
};

module.exports = findDepth;
