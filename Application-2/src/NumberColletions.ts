import {  Sorter } from "./Sorter";

export class NumberCollection extends Sorter{
    constructor(public data:number[]){
        super();
    }
    swap(leftIndex:number,rightIndex:number){
        let temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex]
        this.data[rightIndex] = temp;
    }
    compare(leftIndex:number,rightIndex:number):boolean{
        return this.data[leftIndex]>this.data[rightIndex]
    }
    get length():number{
        return this.data.length;
    }
}