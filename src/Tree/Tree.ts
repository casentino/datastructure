export default class TreeNode<T> {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;

  constructor(value: T) {
    this.value = value;
  }
}
