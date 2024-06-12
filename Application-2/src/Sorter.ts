
export abstract class Sorter{
    abstract swap(leftIndex:number,rightIndex:number):void
    abstract compare(leftIndex:number,rightIndex:number):boolean
    abstract length:number
    sort():void{
        let swaped = 0;
        for(let i = this.length - 1;i>=0;i--){
            for(let j=0;j<i;j++){
                    if(this.compare(j,j+1)){
                        this.swap(j,j+1)
                        swaped = 1;
                    }
            }
            if(swaped == 0)
                break;
        }
    }
}



