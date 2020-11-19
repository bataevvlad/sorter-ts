import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";
import {LinkedList} from "./LinkedList";

// const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
// numbersCollection.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('HelloO AgAiN');
charactersCollection.sort()
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(100);
linkedList.add(20);
linkedList.add(-5);

linkedList.sort();
linkedList.print();
