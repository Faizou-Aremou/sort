import {  Sorter } from "./Sorter";

export interface LinkedNode<T> {
  data: T;
  next: LinkedNode<T> | null;
}

export function linkedListNode<T>(data: T): LinkedNode<T> {
  return {
    data,
    next: null
  }
}

export class LinkedList<T> extends Sorter{

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
    return {data:node.data, next:this.recursiveAdd(data, node.next)}
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
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty')
    }
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    if (!leftNode || !rightNode) {
      return false;
    }
    return this.nodeIsSup(leftNode, rightNode);
  }
  private nodeIsSup(leftNode: LinkedNode<T>, rightNode: LinkedNode<T>): boolean {
    return leftNode.data > rightNode.data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    if (rightNode && leftNode) {
      const leftHand = leftNode?.data;
      leftNode.data = rightNode.data;
      rightNode.data = leftHand;
    }
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: LinkedNode<T> | null= this.head;
    while (node) {
      console.log(node.data);
      node = node.next
    }
  }
}

/**
 {...node, data: rightNode.data }
(r n) (r1, n) (r2, n) = (r, n) si 

*/