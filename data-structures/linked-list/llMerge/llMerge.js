'use strict';

const LinkedList = require('../lib/singly-linked-list.js');

const mergeLists = (list1, list2) => {
  let nodeOf1 = list1.head;
  let nodeOf2 = list2.head;
  while(nodeOf1 !== null && nodeOf2 !== null) {
    let s1 = nodeOf1.next;
    let s2 = nodeOf2.next;
    nodeOf1.next = nodeOf2;
    nodeOf1.next.next = s1;
    nodeOf1 = s1;
    nodeOf2 = s2; 
  }
  return list1;
}

let list1 = new LinkedList();
list1.insert(40)
list1.insert(30)
list1.insert(20)
list1.insert(10)
console.log(list1.print())
let list2 = new LinkedList();
list2.insert(8)
list2.insert(7)
list2.insert(6);
list2.insert(5);
list2.insert(4);
console.log(list2.print())
mergeLists(list1, list2)
console.log(list1.print())
