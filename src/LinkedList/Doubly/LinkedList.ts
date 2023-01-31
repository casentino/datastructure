import ListNode from "./ListNode";

export default class LinkedList<T> {
  head?: ListNode<T>;
  tail?: ListNode<T>;
  size = 0;

  addHead(nodeValue: T) {
    const node = new ListNode(nodeValue);
    if (this.head) {
      node.next = this.head;
      this.head.prev = node;
    }
    this.head = node;
    if (!this.head.next) {
      this.tail = this.head;
    }
    this.size++;
  }
  addTail(nodeValue: T) {
    const node = new ListNode(nodeValue);
    if (this.tail) {
      node.prev = this.tail;
      this.tail.next = node;
    }
    this.tail = node;
    if (!this.tail.prev) {
      this.head = this.tail;
    }
    this.size++;
  }
  findNode(index: number): ListNode<T> | undefined;
  findNode(nodeValue: T): ListNode<T> | undefined;
  findNode(indexOrNodeValue: number | T) {
    if (typeof indexOrNodeValue === "number") {
      return this.findNodeByIndex(indexOrNodeValue);
    }
    this.findNodeByNodeValue(indexOrNodeValue);
  }
  private findNodeByIndex(index: number) {
    if (index < 0 || this.size <= index) {
      throw new Error("IndexOutOfBoundException");
    }
    // direction tail
    if (this.size / 2 <= index) {
      let currNode = this.tail;
      let count = this.size;
      while (count >= index) {
        count--;
        if (currNode) {
          currNode = currNode.prev;
        }
      }
      return currNode;
    }
    let currNode = this.head;
    let count = 0;
    while (count <= index) {
      count++;
      if (currNode) {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  private findNodeByNodeValue(nodeValue: T) {
    let startHead = this.head;
    let startTail = this.tail;

    let count = 0;
    while (count <= this.size) {
      if (startHead) {
        count++;
        if (startHead.value === nodeValue) {
          return startHead;
        }
        startHead = startHead.next;
      }

      if (startTail) {
        count++;
        if (startTail.value === nodeValue) {
          return startTail;
        }
        startTail = startTail.prev;
      }
    }
    if (count > this.size) return;
  }
  addIndex(index: number, nodeValue: T) {
    if (index < 0 || this.size <= index) {
      throw new Error("IndexOutOfBoundException");
    }
    if (index === 0) {
      this.addHead(nodeValue);
      return;
    } else if (index == this.size - 1) {
      this.addTail(nodeValue);
      return;
    }

    const nextNode = this.findNode(index);
    if (!nextNode) {
      this.addHead(nodeValue);
      return;
    }
    const prevNode = nextNode.prev;
    if (!prevNode) {
      this.addTail(nodeValue);
      return;
    }
    const newNode = new ListNode(nodeValue);
    prevNode.next = newNode;
    newNode.prev = prevNode;

    nextNode.prev = newNode;
    newNode.next = nextNode;

    this.size++;
  }
  deleteNode(): void;
  deleteNode(index: number): void;
  deleteNode(nodeValue: T): void;
  deleteNode(indexOrValue?: number | T) {
    if (indexOrValue === undefined) {
      this.delete();
      return;
    }
    if (typeof indexOrValue === "number") {
      this.deleteByIndex(indexOrValue);
      return;
    }
    this.deleteByNodeValue(indexOrValue);
  }

  private delete() {
    this.head = undefined;
    this.tail = undefined;
    this.size = 0;
  }

  private deleteByIndex(index: number) {
    if (index >= this.size || index < 0) {
      throw new Error("IndexOutOfBoundException");
    }

    const node = this.findNode(index);
    if (!node) return;
    const nextNode = node.next;
    const prevNode = node.prev;

    if (nextNode) {
      nextNode.prev = prevNode;
    }
    if (prevNode) {
      prevNode.next = nextNode;
    }
    this.size--;
  }
  private deleteByNodeValue(nodeValue: T) {
    let currNode = this.head;
    while (currNode) {
      if (currNode.value === nodeValue) {
        if (currNode.prev) {
          currNode.prev.next = undefined;
        }
        if (currNode.next) {
          currNode.next.prev = undefined;
        }
      } else {
        currNode = currNode.next;
      }
    }
    this.size--;
  }
}
