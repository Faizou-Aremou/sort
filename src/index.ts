import { NumberCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const data = new NumberCollection([10, 3, -5, 0])
const sorter = new Sorter(data);
sorter.sort();
console.log('',sorter.collection)