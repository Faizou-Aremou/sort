import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkdeList";
import { NumberCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numberCollection = new NumberCollection([10, 3, -5, 0])
numberCollection.sort();
console.log('number', numberCollection.data)
const charactersCollection = new CharactersCollection('Xaayb')
charactersCollection.sort();
console.log('string', charactersCollection.data)
const linkedList = new LinkedList<number>()
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
console.log('', linkedList)
linkedList.sort();
console.log('',)
linkedList.print();