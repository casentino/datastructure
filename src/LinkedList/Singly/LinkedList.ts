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
}
