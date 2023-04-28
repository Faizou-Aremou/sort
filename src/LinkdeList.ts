
export interface LinkedNode<T> {
  readonly data: T;
  readonly next: LinkedNode<T> | null;
}

export function linkedListNode<T>(data: T): LinkedNode<T> {
  return {
    data,
    next: null
  }
}

export class LinkedList<T>{

  head: LinkedNode<T> | null = null;
  loopAdd(data: T): void {
    const node = linkedListNode(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next
    }

    this.head = { ...tail, next: node };
  }


  add(data: T): void {
    this.head = this.recursiveAdd(data, this.head);
  }
  private recursiveAdd(data: T, node: LinkedNode<T> | null): LinkedNode<T> | null {
    if (!node) {
      return linkedListNode(data);
    } else if (!node.next) {
      return { ...node, next: linkedListNode(data) }
    }
    return this.recursiveAdd(data, node.next)
  }

  get length(): number {
    return this.getLength(this.head);

  }

  private getLength(node: LinkedNode<T> | null): number {
    if (!node) {
      return 0;
    } else if (!node.next) {

      return 1
    }
    return 1 + this.getLength(node.next)
  }

  at(index: number): LinkedNode<T> | undefined {
    return this.recursiveAt(index, this.head);
  }
  private recursiveAt(index: number, node: LinkedNode<T> | null): LinkedNode<T> | undefined {
    if (!node || index < 0) {
      return undefined
    } else if (!node.next) {
      return index === 0 ? node : undefined
    }

    return index === 0 ? node : this.recursiveAt(index - 1, node.next);
  }
  compare(){
    
  }
}

/**
 
(null) = undefined 
(r null) index = index=0 alors r sinon null
(r n) index = index=0 alors r sinon  recursiveAt(r.next, index-1)
*/