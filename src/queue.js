const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(x) {
    const node = new ListNode(x);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    }
    this.tail.next = node;
    this.tail = node;
    return this;
  }
}

class Queue {
  constructor() {
    this.queue = [];
  }

  getUnderlyingList() {
    let linkedList = new LinkedList();
    this.queue.forEach((element) => linkedList.append(element));
    return linkedList.head;
  }

  enqueue(el) {
    return this.queue.push(el);
  }

  dequeue() {
    return this.queue.shift();
  }
}

module.exports = {
  Queue,
};
