import TreeNode from "../Tree";

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right = new TreeNode(8);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.left = new TreeNode(5);
root.right.right.right = new TreeNode(1);

function pathSum(root: TreeNode<number> | null, targetSum: number): number[][] {
  let results: number[][] = [];
  function recursiveTraverse(node: TreeNode<number> | null, targetNum = targetSum, list: number[]) {
    if (node && !node.left && !node.right) {
      if (targetNum === node.value) {
        list.push(node.value);
        results = [...results, [...list]];
        list.pop();
      }
      return;
    }
    if (node && node.left) {
      list.push(node.value);
      recursiveTraverse(node.left, targetNum - node.value, list);
      list.pop();
    }

    if (node && node.right) {
      list.push(node.value);
      recursiveTraverse(node.right, targetNum - node.value, list);
      list.pop();
    }
  }
  recursiveTraverse(root, targetSum, []);
  return results;
}

console.log(pathSum(root, 22));
