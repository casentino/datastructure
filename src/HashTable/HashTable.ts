import { LinkedList } from "../LinkedList/Singly";

type HashNodeType<V> = { hashCode: number; value: V };

export default class HashTable<K extends string | number, V> {
  private capacity: number = 11;
  private loadFactor: number = 0.75;
  private hashTables: Array<LinkedList<HashNodeType<V>>> = new Array(this.capacity);

  constructor(initialCapacity?: number, loadFactor?: number) {
    if (initialCapacity !== undefined) {
      this.capacity = initialCapacity;
      this.hashTables = new Array(initialCapacity);
    }
  }
  private hashFunction(k: K) {
    let hash = 17;
    let key = typeof k === "string" ? k : k.toString();
    for (let i = 0; i < key.length; i++) {
      hash = 13 * hash * key.charCodeAt(i);
    }
    return hash;
  }
  private getHashCodeToIndex(hash: number) {
    return hash % this.capacity;
  }
  get(key: K) {
    const hashCode = this.hashFunction(key);
    const hashIndex = this.getHashCodeToIndex(hashCode);
    if (!this.hashTables[hashIndex]) {
      return;
    }
    return this.findHashNode(this.hashTables[hashIndex], hashCode);
  }
  rehash() {}

  put(key: K, value: V) {
    const hashCode = this.hashFunction(key);
    const hashIndex = this.getHashCodeToIndex(hashCode);
    if (!this.hashTables[hashIndex]) {
      const linkedList = new LinkedList<HashNodeType<V>>();
      linkedList.addAtHead({
        hashCode,
        value,
      });

      this.hashTables[hashIndex] = linkedList;
      return;
    }
    const findNode = this.findHashNode(this.hashTables[hashIndex], hashCode);
    if (!findNode) {
      this.hashTables[hashIndex].addBack({ hashCode, value });
      return;
    }
    const prevValue = { ...findNode.value };
    findNode.value = { hashCode, value };
    return prevValue;
  }
  findHashNode(linkedList: LinkedList<HashNodeType<V>>, hashCode: number) {
    let currNode = linkedList.head;
    while (currNode) {
      if (currNode.value.hashCode === hashCode) {
        return currNode;
      }
      currNode = currNode.next;
    }
    return;
  }
  remove(key: K) {
    const hashCode = this.hashFunction(key);
    const hashIndex = this.getHashCodeToIndex(hashCode);
    if (!this.hashTables[hashIndex]) {
      return;
    }
    const findNode = this.findHashNode(this.hashTables[hashIndex], hashCode);
    if (!findNode) return;

    this.hashTables[hashIndex].deleteNode(findNode);
    if (!this.hashTables[hashIndex].head) {
      delete this.hashTables[hashIndex];
    }
    return findNode;
  }
}
