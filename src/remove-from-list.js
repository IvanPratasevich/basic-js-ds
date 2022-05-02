const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
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
function removeKFromList(l, k) {
  const temp = toArray(l);
  let arrFilter = temp.filter(function (elem) {
    if (elem === k) {
      return false;
    } else {
      return true;
    }
  });
  let linkedList = new LinkedList();
  arrFilter.forEach((element) => linkedList.append(element));
  return linkedList.head;
}
function toArray(list) {
  const temp = [];
  let currentNode = list;
  while (currentNode) {
    temp.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return temp;
}

module.exports = {
  removeKFromList,
};
