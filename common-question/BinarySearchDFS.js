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
  find(val) {
    if (this.root == null) return undefined;
    let current = this.root;
    let counter = true;
    while (current.value != val) {
      if (current.left == null && current.right == null) {
        return false;
      }
      if (current.value < val) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return true;
  }
  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPreOrder() {
    var data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
}
const arr = new BinarySearchTree();
