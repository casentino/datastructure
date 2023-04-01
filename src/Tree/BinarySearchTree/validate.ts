import TreeNode from "../Tree";
import { insertBST } from "./insertion";

const root = new TreeNode(8);
insertBST(root, 1);
insertBST(root, 6);
// insertBST(root, 4);
// insertBST(root, 7);
insertBST(root, 14);
insertBST(root, 15);
root!.left!.right!.left = new TreeNode(7);
root!.left!.right!.right = new TreeNode(4);
console.log(root);
function validateBST(node: TreeNode<number> | undefined, range?: [number, number]): boolean {
  if (!node) {
    return true;
  }
  if (!range) {
    range = [-Infinity, +Infinity];
  }
  const [min, max] = range;
  const { value } = node;
  if (value <= min || value >= max) {
    return false;
  }
  let isLeft = validateBST(node.left, [min, node.value]);
  let isRight = validateBST(node.right, [node.value, max]);
  return isLeft && isRight;
}

console.log(validateBST(root));
