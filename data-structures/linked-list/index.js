'use strict';

const SinglyLinkedList = require('./lib/singly-linked-list.js');

let list = new SinglyLinkedList();

list.append('hello');
list.append('hihi');
list.append('goodbye');

list.insert('to the front');

console.log('console.log: ', list.print());

list.includes('hihi');
list.includes('to the front');
list.includes('goodbye');
list.includes('NOPE');

list.print();