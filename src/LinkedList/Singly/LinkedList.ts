import ListNode from "./ListNode";

export default class LinkedList<T> {
  head?: ListNode<T>;
  addAtHead(value: T) {
    const node = new ListNode(value);
    node.next = this.head;
    this.head = node;
  }

  addBack(value: T) {
    if (!this.head) return;
    const node = new ListNode(value);
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = node;
  }

  findNode(value: T) {
    let currNode = this.head;
    while (currNode) {
      if (currNode.value === value) {
        return currNode;
      }
      currNode = currNode.next;
    }
    throw Error("Node not Found.");
  }
  addAfter(node: ListNode<T>, value: T) {
    const newNode = new ListNode(value);
    newNode.next = node.next;
    node.next = newNode;
  }
  deleteNode(node: ListNode<T>) {
    let currNode = this.head;
    if (currNode === node) {
      this.head = node.next;
      return;
    }
    while (currNode) {
      if (currNode.next === node) {
        currNode.next = node.next;
        return;
      }
      currNode = currNode.next;
    }
  }
  deleteAfter(node: ListNode<T>) {
    if (node.next) {
      node.next = node.next.next;
    }
  }
}
