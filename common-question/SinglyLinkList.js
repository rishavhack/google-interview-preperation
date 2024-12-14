class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
class SinglyList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this.length;
  }
  pop() {
    if (this.head == null) return undefined;
    let currentNode = this.head;
    let previousTail = this.head;
    while (currentNode.next) {
      previousTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = previousTail;
    this.tail.next = null;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return this.length;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this.length;
  }
  shift() {
    if (this.head == null) return undefined;
    let newHead = this.head;
    this.head = newHead.next;
    newHead.next = null;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return this.length;
  }
  getNode(idx) {
    if (idx < 0 || idx > this.length - 1) return null;
    let currentNode = this.head;
    let i = 0;
    while (i != idx) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }
  setNode(idx, val) {
    if (idx < 0 || idx > this.length) return null;
    if (idx == 0) return this.unshift(val);
    if (idx == this.length) return this.push(val);
    let newNode = new Node(val);
    var prevNode = this.getNode(idx - 1);
    var temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return idx;
  }
  removeNode(idx) {
    if (idx < 0 || idx > this.length) return null;
    if (idx == 0) return this.shift();
    if (idx == this.length) return this.pop();
    let prevNode = this.getNode(idx - 1);
    let tmp = prevNode.next.next;
    prevNode.next = tmp;
    this.length--;
    return true;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let arr = new SinglyList();
