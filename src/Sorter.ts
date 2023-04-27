
export interface Sortable { //the interface is not enough segregated in regard of SOLID principal, the name of the interface should be BubbleSortable
  length: number;
  swap(leftIndex: number, rightIndex: number): void;
  compare(leftIndex: number, rightIndex: number): boolean;
}


export class Sorter {
  constructor(public collection: Sortable) {
  }
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
