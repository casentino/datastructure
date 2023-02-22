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

/**
 * PreOrder
 */
function iterativePreOrder<T>(node: TreeNode<T>) {
  const stack: TreeNode<T>[] = [];
  const print: T[] = [];
  let current: TreeNode<T> | undefined = node;
  stack.push(current);
  while (stack.length > 0) {
    const popNode = stack.pop()!;
    print.push(popNode.value);

    if (popNode.right) {
      stack.push(popNode.right);
    }
    if (popNode.left) {
      stack.push(popNode.left);
    }
  }
  return print;
}
console.log(iterativePreOrder(root));
/**
 * InOrder
 */

function iterativeInOrder<T>(node: TreeNode<T>) {
  const stack: TreeNode<T>[] = [];
  const print: T[] = [];
  let current: TreeNode<T> | undefined = node;
  while (current || stack.length > 0) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else if (stack.length > 0) {
      current = stack.pop()!;
      print.push(current.value);
      current = current.right;
    }
  }
  return print;
}

console.log(iterativeInOrder(root));

/**
 * PostOrder
 */
function iterativePostOrder<T>(node: TreeNode<T>) {
  const stack: TreeNode<T>[] = [];
  const print: T[] = [];
  let current: TreeNode<T> | undefined = node;
  stack.push(current);
  while (stack.length > 0) {
    if (current) {
      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }
      current = current.left;
    } else {
      const popNode = stack.pop()!;
      print.push(popNode.value);
      if (node !== popNode && stack[0].left === popNode) {
        current = stack[stack.length - 1];
      }
    }
  }
  return print;
}
console.log(iterativePostOrder(root));
