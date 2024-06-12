import {  Sorter } from "./Sorter";
class Node{
    next:null|Node = null;
    constructor(public value:number){
        this.value = value;
    }
}
export class LinkList extends Sorter{
    head:null|Node = null
    addNodeAtStart(value:number):void{
        const node = new Node(value)
        if(!this.head){
            this.head = node;
            return
        }
        let start = this.head;
        while(start.next !== null){
            start = start.next
        }
        start.next = node;
        
    }
    get length():number{
        let len = 0
        let point = this.head;
        while(point){
            len++
            point = point.next;
        }
        return len;
    }
    printNodes():void{
        let start = this.head
        while(start){
            console.log(start.value);
            start = start.next;
        }
    }
    atIndex(index:number):Node{
        let i = 0
        let start = this.head;
        while(start && i<index){
            i++
            start = start.next
        }
        if(start){
            return start
        }
        throw new Error('Index out of bound');
    }
    compare(leftIndex:number,rightIndex:number):boolean{
        if(!this.head){
            throw new Error('List is empty')
        }
        return this.atIndex(leftIndex).value > this.atIndex(rightIndex).value
    }
    swap(leftIndex:number,rightIndex:number):void{
        if(!this.head){
            throw new Error('Link list is empty')
        }
        const leftNode = this.atIndex(leftIndex)
        const rightNode = this.atIndex(rightIndex)
        let temp = leftNode.value;
        leftNode.value = rightNode.value
        rightNode.value = temp;
    }
}


