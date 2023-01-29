import ListNode from "./ListNode";

export function printNodes<T>(node?: ListNode<T>) {
  let currNode = node;
  while (currNode) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}
export function nodesToArray<T>(node?: ListNode<T>) {
  let arr: T[] = [];
  let currNode = node;
  while (currNode) {
    arr.push(currNode.value);
    currNode = currNode.next;
  }
  return arr;
}
export function isEqualArray(a: any[], b: any[]) {
  const strA = JSON.stringify(a);
  const strB = JSON.stringify(b);
  return strA === strB;
}
