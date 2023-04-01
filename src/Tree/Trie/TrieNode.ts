type ChildrenMap<T> = {
  [key: string]: T;
};

export class TrieNode<T extends string = string> {
  value?: T;
  isEndOfWord = false;
  children: ChildrenMap<TrieNode<T>> = {};
  constructor(value?: T) {
    if (value !== undefined) {
      this.value = value;
    }
  }
}

export class Trie<T extends string = string> {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(value: T) {
    let current = this.root;
    for (let i = 0; i < value.length; i++) {
      const char = value.charAt(i);
      if (current.children[char] === undefined) {
        current.children[char] = new TrieNode(char);
      }
      current = current.children[char];
    }
    current.isEndOfWord = true;
  }

  search(value: T) {
    // return this.searchRecursive(this.root, value, 0);
    let current = this.root;
    for (let i = 0; i < value.length; i++) {
      const char = value.charAt(i);
      if (current.children[char] === undefined) {
        return false;
      }
      current = current.children[char];
    }
    return current.isEndOfWord;
  }
  searchRecursive(node: TrieNode, word: string, depth: number): boolean {
    if (word.length === depth && node.isEndOfWord) {
      return true;
    }
    if (word[depth] === ".") {
      const keys = Object.keys(node.children);
      for (const key of keys) {
        const isSearched = this.searchRecursive(node.children[key], word, depth + 1);
        if (isSearched) {
          return true;
        }
      }
    }
    if (node.children[word[depth]] !== undefined) {
      return this.searchRecursive(node.children[word[depth]], word, depth + 1);
    }
    return false;
  }
  isEmptyNode<T extends string>(node: TrieNode<T>) {
    const { children } = node;
    return Object.keys(children).length === 0;
  }
  remove(value: string) {
    this.removeDepth(this.root, value);
  }
  removeDepth<T extends string>(node: TrieNode<T> | undefined, value: string, depth: number = 0) {
    if (!node) {
      return undefined;
    }
    if (depth === value.length) {
      if (node.isEndOfWord) {
        node.isEndOfWord = false;
      }
      if (!this.isEmptyNode(node)) {
        return node;
      }
      return undefined;
    }

    const removedNode = this.removeDepth(node.children[value.charAt(depth)], value, depth + 1);

    if (!removedNode) {
      node.children = this.excludeProperty(node.children, value.charAt(depth));
    }
    if (this.isEmptyNode(node)) {
      return undefined;
    }
    return node;
  }
  printTree(): string[] {
    let curr = this.root.children;
    const temp: string[] = [];
    while (curr) {
      let str = "";

      for (const [key, node] of Object.entries(curr)) {
        str = str.concat(key, node.value || "");
        if (node.isEndOfWord) {
        }
      }
    }
    return temp;
  }
  private excludeProperty<T extends string>(obj: ChildrenMap<TrieNode<T>>, mapKey: string) {
    const entriesObj = Object.entries(obj);
    const newObj: ChildrenMap<TrieNode<T>> = {};
    for (let i = 0; i < entriesObj.length; i++) {
      const [key, node] = entriesObj[i];
      if (key !== mapKey) {
        newObj[key] = node;
      }
    }
    return newObj;
  }
}

const trie = new Trie();
const strings = ["baby", "ball", "tree", "trie", "and", "ant", "bag"];
for (const s of strings) {
  trie.insert(s);
}
console.log(trie.search("babyiiiiiii"));
