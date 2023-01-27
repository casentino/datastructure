import { LinkedList, ListNode, methods } from "./LinkedList/Singly";

const sLinkedList = new LinkedList();
console.log("ADD At HEAD and ADD BACK");
sLinkedList.addAtHead(1);
sLinkedList.addAtHead(2);
sLinkedList.addBack(3);
methods.printNodes(sLinkedList.head);

console.log("FIND NODE");
console.log(sLinkedList.findNode(3));
// sLinkedList.find(5);  // ERROR

console.log("ADD AFTER: 1 after 4");
const findedNode = sLinkedList.findNode(1);
sLinkedList.addAfter(findedNode, 4);
methods.printNodes(sLinkedList.head);

console.log("DELTE NODE: 1");
sLinkedList.deleteNode(findedNode);
methods.printNodes(sLinkedList.head);

console.log("DELETE AFTER: 4");

sLinkedList.deleteAfter(sLinkedList.findNode(4));
methods.printNodes(sLinkedList.head);

console.log("DELETE NODE: head");
if (sLinkedList.head) {
  sLinkedList.deleteNode(sLinkedList.head);
  methods.printNodes(sLinkedList.head);
}
