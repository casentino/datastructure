import { LinkedList } from "../LinkedList/Singly";

type HashNodeType<K, V> = { key: K; value: V };

export default class HashTable<K extends string | number, V> {
  private capacity: number = 11;
  private defaultLoadFactor: number = 0.75;
  private hashTables: Array<LinkedList<HashNodeType<K, V>>> = new Array(this.capacity);
  private size: number = 0;

  constructor();
  constructor(initialCapacity: number);
  constructor(initialCapacity: number, loadFactor: number);
  constructor(initialCapacity?: number, loadFactor?: number) {
    if (initialCapacity !== undefined) {
      this.capacity = initialCapacity;
      this.hashTables = new Array(initialCapacity);
    }
    if (loadFactor !== undefined) {
      this.defaultLoadFactor = loadFactor;
    }
  }
  private hashFunction(k: K) {
    let hash = 17;
    let key = typeof k === "string" ? k : k.toString();
    for (let i = 0; i < key.length; i++) {
      hash = 13 * hash * key.charCodeAt(i);
    }
    return hash % this.capacity;
  }
  get(key: K) {
    const hashIndex = this.hashFunction(key);
    if (!this.hashTables[hashIndex]) {
      return;
    }
    return this.findHashNode(this.hashTables[hashIndex], key);
  }
  rehash() {
    const tempTable = this.hashTables;

    this.hashTables = new Array(this.capacity * 2);
    for (let i = 0; i < tempTable.length; i++) {
      let currNode = tempTable[i].head;
      while (!currNode) {
        const { key, value } = currNode!.value;
        this.put(key, value);
        currNode = currNode!.next;
      }
    }
  }
  capacityMonitor() {
    const loadFactor = this.size / this.capacity;
    if (loadFactor <= this.defaultLoadFactor) {
      return;
    }
    this.rehash();
  }
  put(key: K, value: V) {
    const hashIndex = this.hashFunction(key);
    if (!this.hashTables[hashIndex]) {
      const linkedList = new LinkedList<HashNodeType<K, V>>();
      linkedList.addAtHead({
        key,
        value,
      });
      this.size++;
      this.hashTables[hashIndex] = linkedList;
      this.capacityMonitor();
      return;
    }
    const findNode = this.findHashNode(this.hashTables[hashIndex], key);
    if (findNode) {
      const prevValue = { ...findNode.value };
      findNode.value.value = value;
      return prevValue;
    }
    this.hashTables[hashIndex].addBack({ key, value });
    this.size++;
    this.capacityMonitor();
    return;
  }
  findHashNode(linkedList: LinkedList<HashNodeType<K, V>>, key: K) {
    let currNode = linkedList.head;
    while (currNode) {
      if (currNode.value.key === key) {
        return currNode;
      }
      currNode = currNode.next;
    }
    return;
  }
  remove(key: K) {
    const hashIndex = this.hashFunction(key);
    if (!this.hashTables[hashIndex]) {
      return;
    }
    const findNode = this.findHashNode(this.hashTables[hashIndex], key);
    if (!findNode) return;

    this.hashTables[hashIndex].deleteNode(findNode);
    if (!this.hashTables[hashIndex].head) {
      delete this.hashTables[hashIndex];
    }
    return findNode;
  }
}
