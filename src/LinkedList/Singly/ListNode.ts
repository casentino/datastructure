class ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
export default ListNode;
