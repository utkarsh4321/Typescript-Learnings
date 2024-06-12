import { CharacterCollection } from "./CharacterCollections";
import { NumberCollection } from "./NumberColletions";
import {LinkList} from './LinkedListCollections'


const colletions = new NumberCollection([4,1,3,10,5,2])
colletions.sort()
console.log(colletions.data)

const characterCollection = new CharacterCollection('XZadT')
characterCollection.sort();
console.log(characterCollection.data)

const ll = new LinkList();
ll.addNodeAtStart(3)
ll.addNodeAtStart(1)
ll.addNodeAtStart(2)
ll.addNodeAtStart(5)
ll.addNodeAtStart(4)
ll.sort()
ll.printNodes()





