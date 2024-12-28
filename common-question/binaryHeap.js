class MaxHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let lengthOfNewData = this.values.length;
    let paresntIndex = Math.floor((lengthOfNewData - 1) / 2);
    while (paresntIndex > 0) {
      paresntIndex = Math.floor((lengthOfNewData - 1) / 2);
      if (this.values[paresntIndex - 1] < this.values[lengthOfNewData - 1]) {
        let tmp = this.values[paresntIndex - 1];
        this.values[paresntIndex - 1] = this.values[lengthOfNewData - 1];
        this.values[lengthOfNewData - 1] = tmp;
        lengthOfNewData = paresntIndex;
      } else {
        break;
      }
    }
  }
  remove() {
    if (!this.values.length) return undefined;
    if (this.values.length == 1) {
      this.values = [];
    } else {
      const element = this.values.pop();
      this.values[0] = element;
      let idx = 0;
      while (true) {
        let rightIndex = 2 * idx + 2;
        let leftIndex = 2 * idx + 1;
        let swap = null;
        if (
          this.values[leftIndex] &&
          this.values[leftIndex] > element &&
          this.values[leftIndex] > this.values[rightIndex]
        ) {
          swap = leftIndex;
        } else if (
          this.values[rightIndex] &&
          this.values[rightIndex] > element
        ) {
          swap = rightIndex;
        }
        if (swap == null) return this.values;
        let tmp = this.values[idx];
        this.values[idx] = this.values[swap];
        this.values[swap] = tmp;
        idx = swap;
      }
    }
    return this.values;
  }
}
const heap = new MaxHeap();
