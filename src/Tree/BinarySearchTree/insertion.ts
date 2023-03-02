import TreeNode from "../Tree";

export function insertBST(root: TreeNode<number> | undefined, value: number) {
  if (!root) {
    root = new TreeNode(value);
    return root;
  }
  if (root.value > value) {
    root.left = insertBST(root.left, value);
  } else if (root.value < value) {
    root.right = insertBST(root.right, value);
  }
  return root;
}
const root = new TreeNode(5);
insertBST(root, 3);
// insertBST(root, 2);
// insertBST(root, 4);
// insertBST(root, 7);
insertBST(root, 6);
// insertBST(root, 8);
insertBST(root, 9);
insertBST(root, 10);
insertBST(root, 11);
insertBST(root, 12);

/**
 *      5
 *    /   \
 *   3     7
 *  / \   / \
 * 2   4 6   8
 *
 */
