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
    } else {
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

  let prev: TreeNode<T> | undefined;
  stack.push(node);
  while (stack.length > 0) {
    const current = stack[stack.length - 1];
    if (!prev || prev.left === current || prev.right === current) {
      if (current.left) {
        stack.push(current.left);
      } else if (current.right) {
        stack.push(current.right);
      } else {
        const popNode = stack.pop()!;
        print.push(popNode.value);
      }
    } else if (prev === current.left) {
      if (current.right) {
        stack.push(current.right);
      } else {
        const popNode = stack.pop()!;
        print.push(popNode.value);
      }
    } else if (prev === current.right) {
      const popNode = stack.pop()!;
      print.push(popNode.value);
    }
    prev = current;
  }
  return print;
}
console.log(iterativePostOrder(root));

function postorderTraversal(root: TreeNode<number> | null) {
  if (!root) return [];

  const stack = [root];
  const result = [];

  while (stack.length) {
    const node = stack.pop()!;
    result.unshift(node.value);

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return result;
}

const root2 = new TreeNode(3);
root2.left = new TreeNode(5);
root2.right = new TreeNode(1);
root2.left.left = new TreeNode(6);
root2.left.right = new TreeNode(2);
root2.left.right.left = new TreeNode(7);
root2.left.right.right = new TreeNode(4);
root2.right.left = new TreeNode(0);
root2.right.right = new TreeNode(8);
console.log(iterativeInOrder(root2));
console.log(iterativePostOrder(root2));
