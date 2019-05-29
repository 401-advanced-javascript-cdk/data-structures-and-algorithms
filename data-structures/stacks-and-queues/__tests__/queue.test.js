'use strict';

const Queue = require('../queue.js');

describe('Queue', () => {
  it('create an instance of Queue', () => {
    let q = new Queue();
    expect(q).toBeInstanceOf(Queue);
  });
  it('has front, rear, and length properties', () => {
    let q = new Queue();
    expect(q.length).toBe(0);
    expect(q.front).not.toBeUndefined();
    expect(q.rear).not.toBeUndefined();
  })
  describe('Enqueue Method', () => {
    it('can enqueue a node onto the queue', () => {
      let q = new Queue;
      q.enqueue(1);
      expect(q.front.value).toEqual(1);
    });
    it('can enqueue several nodes in the correct order', () => {
      let q = new Queue;
      q.enqueue('one');
      q.enqueue('two');
      q.enqueue('three');
      expect(q.front.value).toEqual('one');
      expect(q.rear.value).toEqual('three');
      expect(q.length).toEqual(3);
    });
  });
  describe('Dequeue Method', () => {
    it('can dequeue a node and returns a value', () => {
      let q = new Queue;
      q.enqueue('blah');
      expect(q.dequeue()).toBe('blah');
    });
    it('also works with a queue of two nodes', () => {
      let q = new Queue;
      q.enqueue('blah');
      q.enqueue('another one');
      expect(q.dequeue()).toBe('blah');
    });
    it('can take a queue of any length and dequeque them all', () => {
      let q = new Queue;
      q.enqueue('blah');
      q.enqueue('another one');
      q.enqueue('more');
      q.enqueue('one more')
      let first = q.dequeue();
      let second = q.dequeue();
      let third = q.dequeue();
      let forth = q.dequeue();
      expect(first).toBe('blah');
      expect(second).toBe('another one');
      expect(third).toBe('more');
      expect(forth).toBe('one more');
    });
    it('returns node on an empty queue', () => {
      let q = new Queue;
      expect(q.dequeue()).toBeNull();
    })
  });
  describe('Peek Method', () => {
    it('returns the value of the node in the front', () => {
      let q = new Queue();
      q.enqueue(1);
      expect(q.peek()).toEqual(1);
    });
    it('returns null if there is no front node', () => {
      let q = new Queue();
      expect(q.peek()).toBeNull();
    });
  });
;})