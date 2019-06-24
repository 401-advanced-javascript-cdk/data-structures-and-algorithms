'use strict';

const LinkedList = require('../linked-list/lib/singly-linked-list.js');

class HashTable {
  constructor() {
    this.data = new Array(100);
  }

  hash(key) {
    let code = 0;
    for (let index in key) {
      code += key.charCodeAt(index) * 97;
    }
    return code % this.data.length;
  }

  add(key, value) {
    let index = this.hash(key);
    if(this.data[index] === undefined) {
      let list = new LinkedList();
      list.append({[key]: value});
      this.data[index] = list;
    }
    else {
      this.data[index].append({[key]: value});
    }
  }

  get(key) {
    let index = this.hash(key);
    if (this.data[index] && this.data[index].head) {
      let currentNode = this.data[index].head;
      while(currentNode) {
        if (currentNode.data[key]) {
          return currentNode.data[key];
        }
        currentNode = currentNode.next;
      }
      return null;
    }
    else {
      return null;
    }
  }

  contains(key) {
      let index = this.hash(key);
      if (this.data[index] && this.data[index].head) {
        let currentNode = this.data[index].head;
        while(currentNode) {
          if (currentNode.data[key]) {
            return true;
          }
          currentNode = currentNode.next;
        }
        return false;
      }
      else {
        return false;
      }
  }
}

module.exports = HashTable;