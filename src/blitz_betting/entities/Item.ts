export class Item{
    static itemSequence = 0;
    private readonly id : number;
    private readonly name : string;

    constructor(name : string){
        this.name = name;
        this.id = Item.itemSequence++;
    }

    getItemName(){
        return this.name;
    }

    getItemId(){
        return this.id;
    }
}