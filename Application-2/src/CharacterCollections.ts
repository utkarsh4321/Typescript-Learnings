import {  Sorter } from "./Sorter";

export class CharacterCollection extends Sorter{
    constructor(public data:string){
        super()
    }
    swap(leftIndex:number,rightIndex:number){
        const characters = this.data.split('')
        let temp = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex]
        characters[rightIndex] = temp;
        this.data = characters.join('')
    }
    compare(leftIndex:number,rightIndex:number):boolean{
        return this.data[leftIndex].toLowerCase()>=this.data[rightIndex].toLowerCase()
    }
    get length():number{
        return this.data.length;
    }
}