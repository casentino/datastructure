import { LinkedList, ListNode, methods } from './LinkedList/Singly';

const sLinkedList = new LinkedList();
sLinkedList.addAtHead(1);
sLinkedList.addAtHead(2);
sLinkedList.addBack(3);
methods.printNodes(sLinkedList.head);