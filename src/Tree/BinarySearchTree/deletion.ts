import { printInOrder, printPreOrder } from "../traverse";
import TreeNode from "../Tree";
import { insertBST } from "./insertion";

function findRightLowLeaf(node: TreeNode<number>): TreeNode<number> {
  if (!node.left) {
    return node;
  }
  return findRightLowLeaf(node.left);
}

function deleteBST(node: TreeNode<number> | undefined, value: number) {
  if (!node) return node;
  if (node.value > value) {
    node.left = deleteBST(node.left, value);
  } else if (node.value < value) {
    node.right = deleteBST(node.right, value);
  } else {
    if (!node.right) {
      return node.left;
    } else if (!node.left) {
      return node.right;
    }
    const findedNode = findRightLowLeaf(node!.right);
    node.value = findedNode.value;
    node.right = deleteBST(node.right, node.value);
  }
  return node;
}

// balanced
const root = new TreeNode(50);
insertBST(root, 30);
insertBST(root, 20);
insertBST(root, 40);
insertBST(root, 70);
insertBST(root, 60);
insertBST(root, 80);
deleteBST(root, 50);

// unbalanced

const unbalanced = new TreeNode(5);
insertBST(unbalanced, 20);
insertBST(unbalanced, 1);
insertBST(unbalanced, 4);
insertBST(unbalanced, 2);
insertBST(unbalanced, 3);
insertBST(unbalanced, 19);
insertBST(unbalanced, 25);
insertBST(unbalanced, 27);
insertBST(unbalanced, 23);
insertBST(unbalanced, 22);
insertBST(unbalanced, 24);
insertBST(unbalanced, 21);
console.log(deleteBST(unbalanced, 25));

// const unbalanced = new TreeNode(11);
// insertBST(unbalanced, 6);
// insertBST(unbalanced, 8);
// insertBST(unbalanced, 19);
// insertBST(unbalanced, 4);
// insertBST(unbalanced, 10);
// insertBST(unbalanced, 5);
// insertBST(unbalanced, 17);
// insertBST(unbalanced, 43);
// insertBST(unbalanced, 49);
// insertBST(unbalanced, 31);

// console.log(deleteBST(unbalanced, 19)!.right);
// deleteBST(unbalanced, 2);
// console.log(unbalanced.left!.right!.left);
// console.log(printPreOrder(unbalanced));
