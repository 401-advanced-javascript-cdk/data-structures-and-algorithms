'use strict';

const PseudoQueue = require('../queue-with-stacks.js');

describe('Queue with Stacks', () => {
  it('create an instance of PseudoQueue', () => {
    let q = new PseudoQueue();
    expect(q).toBeInstanceOf(PseudoQueue);
  });
  describe('Enqueue Method', () => {
    it('can enqueue a node onto the queue', () => {
      let q = new PseudoQueue;
      q.enqueue(1);
      expect(q.stack1.top.value).toEqual(1);
    });
    it('pushes nodes onto stack1', () => {
      let q = new PseudoQueue;
      q.enqueue('one');
      q.enqueue('two');
      q.enqueue('three');
      expect(q.stack1.top.value).toEqual('three');
      expect(q.stack1.top.next.next.value).toEqual('one');
    });
  });
  describe('Dequeue Method', () => {
    it('can dequeue a node and returns a value', () => {
      let q = new PseudoQueue;
      q.enqueue(5);
      expect(q.dequeue()).toBe(5);
    });
    it('can take a queue of any length and dequeque them all', () => {
      let q = new PseudoQueue;
      q.enqueue(1);
      q.enqueue(2);
      q.enqueue(3);
      q.enqueue(4)
      let first = q.dequeue();
      let second = q.dequeue();
      let third = q.dequeue();
      let forth = q.dequeue();
      expect(first).toBe(1);
      expect(second).toBe(2);
      expect(third).toBe(3);
      expect(forth).toBe(4);
    });
  });
;})