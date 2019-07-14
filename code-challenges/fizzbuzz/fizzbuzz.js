const fbt = (root) => {
  const node = root;
  if (node === null) return;
  if (node.value % 3 === 0 && node.value % 5 === 0) {
    node.value = 'FizzBuzz';
  } else if (node.value % 3 === 0) {
    node.value = 'Fizz';
  } else if (node.value % 5 === 0) {
    node.value = 'Buzz';
  }
  fbt(node.left);
  fbt(node.right);
};

module.exports = fbt;
