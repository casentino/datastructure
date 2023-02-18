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
// root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

/**
 * PreOrder
 */
function printPreOrder<T>(node?: TreeNode<T>): T[] {
  if (!node) return [];

  const left = printPreOrder(node.left);

  const right = printPreOrder(node.right);

  return [node.value, ...left, ...right];
}
console.log("== PreOrder ==");
console.log(printPreOrder(root));
console.log("== End ==\n");

/**
 *  InOrder
 */
function printInOrder<T>(node?: TreeNode<T>): T[] {
  if (!node) return [];
  const left = printInOrder(node.left);
  const right = printInOrder(node.right);
  return [...left, node.value, ...right];
}
console.log("== InOrder ==");
console.log(printInOrder(root));
console.log("== End ==\n");
/**
 * PostOrder
 */

function printPostOrder<T>(node?: TreeNode<T>): T[] {
  if (!node) return [];
  const left = printPostOrder(node.left);
  const right = printPostOrder(node.right);
  return [...left, ...right, node.value];
}
console.log("== PostOrder ==");
console.log(printPostOrder(root));
console.log("== End ==\n");
