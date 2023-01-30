class ListNode<T> {
  value: T;
  prev?: ListNode<T>;
  next?: ListNode<T>;
  constructor(value: T) {
    this.value = value;
  }
}
export default ListNode;
