import { LinkedList, ListNode, methods } from "../Singly";

function makeList(list: number[]) {
  const linkedList = new LinkedList<number>();
  let prevNode: ListNode<number> | undefined;
  for (const data of list) {
    if (!linkedList.head) {
      linkedList.addAtHead(data);
      prevNode = linkedList.head;
    } else if (prevNode) {
      linkedList.addAfter(prevNode, data);
      prevNode = linkedList.findNode(data);
    }
  }
  return linkedList.head;
}

/**
 * Case 1
 * head = [1,2,6,3,4,5,6]
 * val = 6
 * result = [1,2,3,4,5]
 */
const case1List = [1, 2, 6, 3, 4, 5, 6];
const case1Head = makeList(case1List);

// methods.printNodes(case1Head);
/**
 * Case 2
 * head = []
 * val = 1
 * result = []
 */
const case2List: number[] = [];
const case2Head = makeList(case2List);
// methods.printNodes(case2Head);
/**
 * Case 3
 * head = [7,7,7,7]
 * val = 7;
 * reuslt = []
 */
const case3List = [7, 7, 7, 7];
const case3Head = makeList(case3List);
// methods.printNodes(case3Head);

const testCase = {
  case1: {
    head: case1Head,
    val: 6,
    result: [1, 2, 3, 4, 5],
  },
  case2: {
    head: case2Head,
    val: 1,
    result: [],
  },
  case3: {
    head: case3Head,
    val: 7,
    result: [],
  },
};
const caseFunc = () => testCase;
export type CaseNames = keyof ReturnType<typeof caseFunc>;
export default testCase;
