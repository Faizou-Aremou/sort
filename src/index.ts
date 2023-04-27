import { CharactersCollection } from "./CharactersCollection";
import { NumberCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numberCollection = new NumberCollection([10, 3, -5, 0])
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log('number', numberCollection.data)
const charactersCollection = new CharactersCollection('Xaayb')
const characterSorter = new Sorter(charactersCollection);
characterSorter.sort();
console.log('string', charactersCollection.data)