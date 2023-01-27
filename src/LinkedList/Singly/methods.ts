import ListNode from "./ListNode";

export function printNodes<T>(node?: ListNode<T>) {
  let currNode = node;
  while (currNode) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}
