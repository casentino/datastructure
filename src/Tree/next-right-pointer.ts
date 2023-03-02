import { Queue } from "./level-order-traversal";
import TreeNode from "./Tree";

class TreeNodeNext<T> extends TreeNode<T> {
  next?: TreeNodeNext<T>;
}

const root = new TreeNodeNext(1);
root.left = new TreeNodeNext(3);
root.right = new TreeNodeNext(5);
root.left.left = new TreeNodeNext(7);
root.left.right = new TreeNodeNext(9);
root.right.right = new TreeNode(1);

function timeMeasure(fn: Function) {
  const start = Date.now();
  fn();
  const end = Date.now() - start;
  console.log(`${end}ms`);
}

function nextRightPointer(node: TreeNodeNext<number>) {
  const queue = new Queue<TreeNodeNext<number>>();
  queue.enqueue(node);

  let prev: TreeNodeNext<number> | undefined;
  let curr: TreeNodeNext<number> | undefined;
  let levelFirstNode: TreeNodeNext<number> | undefined;
  while (!queue.isEmpty()) {
    curr = queue.dequeue();
    if (prev && levelFirstNode !== curr) {
      prev.next = curr;
    }
    if (curr) {
      prev = curr;
      if (curr.left) {
        if (!levelFirstNode || levelFirstNode === curr) {
          levelFirstNode = curr.left;
        }
        queue.enqueue(curr.left);
      }
      if (curr.right) {
        if (!levelFirstNode || levelFirstNode === curr) {
          levelFirstNode = curr.right;
        }
        queue.enqueue(curr.right);
      }
    }
  }
  return node;
}

timeMeasure(() => console.log(nextRightPointer(root)));

const root2 = new TreeNodeNext(1);
root2.left = new TreeNodeNext(3);
root2.right = new TreeNodeNext(5);
root2.left.left = new TreeNodeNext(7);
root2.left.right = new TreeNodeNext(9);
root2.right.right = new TreeNode(1);
function connect(prevNode: TreeNodeNext<number> | undefined, nextNode: TreeNodeNext<number>) {
  if (prevNode) {
    prevNode.next = nextNode;
  }
}

function makNext(root?: TreeNodeNext<number>) {
  if (!root) {
    return;
  }
  let levelNode: TreeNodeNext<number> | undefined = root;
  while (levelNode) {
    let crntNode: TreeNodeNext<number> | undefined = levelNode;
    let nextLevel: TreeNodeNext<number> | undefined;
    let prevChild: TreeNodeNext<number> | undefined;
    while (crntNode) {
      if (crntNode.left) {
        connect(prevChild, crntNode.left);
        prevChild = crntNode.left;
        if (!nextLevel) {
          nextLevel = crntNode.left;
        }
      }
      if (crntNode.right) {
        connect(prevChild, crntNode.right);
        prevChild = crntNode.right;
        if (!nextLevel) {
          nextLevel = crntNode.right;
        }
      }
      crntNode = crntNode.next;
    }
    levelNode = nextLevel;
  }
  return root;
}

timeMeasure(() => console.log(makNext(root2)));
