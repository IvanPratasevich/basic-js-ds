const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rt = null;
  }
  root() {
    return this.rt;
  }

  add(data) {
    let newNode = new Node(data);
    if (!this.rt) {
      this.rt = newNode;
      return;
    }
    let currentNode = this.rt;
    while (currentNode) {
      if (newNode.data > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      } else if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      }
    }
  }

  has(data) {
    let currentNode = this.rt;
    while (currentNode) {
      if (!currentNode) {
        return false;
      }
      if (data === currentNode.data) {
        return true;
      }
      if (data > currentNode.data) {
        currentNode = currentNode.right;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.rt;
    if (!currentNode) {
      return null;
    }
    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      }
      if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return null;
  }

  remove(data) {}

  min() {
    if (!this.root) {
      return null;
    }
    let currentNode = this.rt;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (!this.rt) {
      return;
    }
    let currentNode = this.rt;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
