import TreeNode from "./Tree";

/**
 *      1
 *    /   \
 *   2     3
 *  / \   / \
 * 4  5  6   7
 */
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
class Queue<T> {
  list: T[] = [];

  enqueue(value: T) {
    this.list.push(value);
  }
  dequeue() {
    return this.list.shift();
  }
  peek() {
    return this.list[0];
  }
  isEmpty() {
    return this.list.length === 0;
  }
  size() {
    return this.list.length;
  }
}

function printLevelOrderTraverse<T>(node: TreeNode<T>) {
  const queue = new Queue<TreeNode<T>>();
  const print: T[] = [];
  queue.enqueue(node);
  while (!queue.isEmpty()) {
    const curr = queue.dequeue();
    if (curr) {
      print.push(curr.value);
      if (curr.left) {
        queue.enqueue(curr.left);
      }
      if (curr.right) {
        queue.enqueue(curr.right);
      }
    }
  }
  return print;
}
console.log(printLevelOrderTraverse(root));

function printLevelOrderTraverse2<T>(node: TreeNode<T>) {
  const queue = new Queue<TreeNode<T>>();
  const print: T[][] = [];
  queue.enqueue(node);
  while (!queue.isEmpty()) {
    let levelCount = queue.size();
    let printTemp: T[] = [];
    while (levelCount > 0) {
      const curr = queue.dequeue();
      if (curr) {
        if (curr.left) {
          queue.enqueue(curr.left);
        }
        if (curr.right) {
          queue.enqueue(curr.right);
        }
        printTemp.push(curr.value);
        levelCount--;
      }
    }
    print.push(printTemp);
  }
  return print;
}

console.log(printLevelOrderTraverse2(root));
