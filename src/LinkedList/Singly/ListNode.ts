class ListNode<T> {
  value: T;
  next?: ListNode<T>;
  constructor(value: T) {
    this.value = value;
  }
}
export default ListNode;
