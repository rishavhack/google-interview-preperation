class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value == current.value) {
          return null;
        }
        if (value < current.value) {
          if (current.left == null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right == null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
}
