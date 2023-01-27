import ListNode from "./ListNode";

export function printNodes<T>(node: ListNode<T>) {
  let currNode: null | ListNode<T> = node;
  while (currNode) {
    console.log(currNode.value);
    currNode = node.next;
  }
}
