import { ListNode, methods } from "../Singly";
import { isEqualArray } from "../Singly/methods";
import testCase, { CaseNames } from "./00001-Testcase";
/**
 *
 * https://leetcode.com/problems/remove-linked-list-elements/
 *
 */
const { case1, case2, case3 } = testCase;
function printResult(
  caseName: `${CaseNames} ${"Recursive" | "Iterative"}`,
  removeFunc: (value: number, node?: ListNode<number>) => ListNode<number> | undefined,
  val: number,
  result: number[],
  head?: ListNode<number>
) {
  const output = methods.nodesToArray(removeFunc(val, head));
  console.log(`${caseName} Result: `, output, result, isEqualArray(output, result));
}
// 1. Recursive
export function recursiveRemoveEl(value: number, node?: ListNode<number>): ListNode<number> | undefined {
  if (!node) return;

  const nextNode = recursiveRemoveEl(value, node.next);
  if (node.value === value) {
    return nextNode;
  } else {
    node.next = nextNode;
    return node;
  }
}

printResult("case1 Recursive", recursiveRemoveEl, case1.val, case1.result, case1.head);
printResult("case2 Recursive", recursiveRemoveEl, case2.val, case2.result, case2.head);
printResult("case3 Recursive", recursiveRemoveEl, case3.val, case3.result, case3.head);

export function iterativeRemoveEl(value: number, node?: ListNode<number>) {
  const dummy = new ListNode(value);
  dummy.next = node;
  const prevNode = dummy;
  let curr = prevNode.next;
  while (curr) {
    if (curr.value === value) {
      prevNode.next = curr.next;
      curr = prevNode.next;
    } else {
      curr = curr.next;
    }
  }
  return prevNode.next;
}
printResult("case1 Iterative", iterativeRemoveEl, case1.val, case1.result, case1.head);
printResult("case2 Iterative", iterativeRemoveEl, case2.val, case2.result, case2.head);
printResult("case3 Iterative", iterativeRemoveEl, case3.val, case3.result, case3.head);
