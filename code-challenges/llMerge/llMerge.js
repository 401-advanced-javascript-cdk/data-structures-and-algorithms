const mergeLists = (list1, list2) => {
  let nodeOf1 = list1.head;
  let nodeOf2 = list2.head;
  while (nodeOf1 !== null && nodeOf2 !== null) {
    const s1 = nodeOf1.next;
    const s2 = nodeOf2.next;
    nodeOf1.next = nodeOf2;
    nodeOf1.next.next = s1;
    nodeOf1 = s1;
    nodeOf2 = s2;
  }
  return list1;
};

module.exports = mergeLists;
