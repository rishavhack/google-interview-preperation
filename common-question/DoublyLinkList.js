class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyList {
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this.length;
  }
  pop() {
    if (this.head == null) return undefined;
    let newTail = this.tail.prev;
    if (newTail) {
      this.tail = newTail;
      this.tail.next = null;
    } else {
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
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this.length;
  }
  shift() {
    if (this.head === null) return null;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = this.head.next;
      this.head = newHead;
      this.head.prev = null;
    }
    this.length--;
    return this.length;
  }
  getNode(idx) {
    if (idx < 0 || idx > this.length) return null;
    let currentNode = this.head;
    let counter = 0;
    while (counter !== idx) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  setNode(idx, val) {
    if (idx < 0 || idx > this.length) return null;
    if (idx == 0) return this.unshift(val);
    if (idx == this.length) return this.push(val);
    let newNode = new Node(val);
    let prevNode = this.getNode(idx - 1);
    let tmpNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = tmpNode;
    tmpNode.prev = newNode;
    this.length++;
    return this.length;
  }
  removeNode(idx) {
    if (idx < 0 || idx > this.length) return null;
    if (idx == 0) return this.shift();
    if (idx == this.length) return this.pop();
    let currentNode = this.getNode(idx);
    let prevNode = currentNode.prev;
    let nextNode = currentNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
    return this.length;
  }
}

let arr = new DoublyList();
