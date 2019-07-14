const Stack = require('../../data-structures/stacks-and-queues/stack.js');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.top === null) {
      let current = this.stack1.top;
      while (current) {
        this.stack2.push(this.stack1.pop());
        current = current.next;
      }
      return this.stack2.pop();
    }
    return this.stack2.pop();
  }
}

module.exports = PseudoQueue;
