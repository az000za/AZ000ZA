module.exports = class LinkedListNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    getData() {
      return this.data;
    }
  
    setData(newData) {
      this.data = newData;
    }
  
    getNext() {
      return this.next;
    }
  
    setNext(newNext) {
      this.next = newNext;
    }
  }