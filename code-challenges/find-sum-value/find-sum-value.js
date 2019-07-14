const findSum = (array, value) => {
  const map = new Map();
  if (array.length > 1 && typeof value === 'number') {
    for (let i = 0; i < array.length; i += 1) {
      if (typeof array[i] === 'number') {
        map.set(array[i], i);
      }
    }

    for (let k = 0; k < array.length; k += 1) {
      const remainder = value - array[k];
      if (map.has(remainder) && map.get(remainder) !== k) {
        return [array[k], remainder];
      }
    }
    return null;
  }
  return null;
};

module.exports = findSum;
