import TreeNode from "../Tree";
import { insertBST } from "./insertion";

const root = new TreeNode(50);
insertBST(root, 30);
insertBST(root, 20);
insertBST(root, 40);
insertBST(root, 70);
insertBST(root, 60);
insertBST(root, 80);

export function searchBST(node: TreeNode<number> | undefined, value: number): TreeNode<number> | undefined {
  if (!node || node.value === value) {
    return node;
  }
  if (node.value < value) {
    return searchBST(node.right, value);
  }

  return searchBST(node.left, value);
}

console.log(searchBST(root, 50));
