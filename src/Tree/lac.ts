import TreeNode from "./Tree";

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const n1 = 3;
const n2 = 5;

const pathA: TreeNode<number>[] = [];
const pathB: TreeNode<number>[] = [];

function findPath(node: TreeNode<number> | undefined, n: number, path: TreeNode<number>[]) {
  if (!node) {
    return false;
  }

  path.push(node);
  if (node.value === n) {
    return true;
  }

  if (node.left && findPath(node.left, n, path)) {
    return true;
  }

  if (node.right && findPath(node.right, n, path)) {
    return true;
  }

  path.pop();
  return false;
}

findPath(root, n1, pathA);
findPath(root, n2, pathB);

function findLCA(n1: TreeNode<number>[], n2: TreeNode<number>[]) {
  let i = 0;
  while (n1.length > i && n2.length > i) {
    if (n1[i] !== n2[i]) {
      return n1[i - 1];
    }
    i++;
  }

  return n1[i - 1];
}
console.log(pathA, pathB);
console.log("findLCA", findLCA(pathA, pathB).value);

let lca: TreeNode<number> | undefined;
function recursiveLCA(node: TreeNode<number> | undefined, n1: number, n2: number): boolean {
  let found = false;
  let left = false;
  let right = false;
  if (!node) return false;

  if (node.value === n1 || node.value === n2) {
    found = true;
  }

  left = recursiveLCA(node.left, n1, n2);
  right = recursiveLCA(node.right, n1, n2);

  if ((found && left) || (found && right) || (left && right)) {
    lca = node;
  }
  return found || left || right;
}

recursiveLCA(root, n1, n2);
console.log(lca && lca.value);
