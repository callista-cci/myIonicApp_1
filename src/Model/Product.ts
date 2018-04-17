

export class Product{
    id:number;
    name:string;
    cost:number;
    quantity:number;
    available:boolean;
    availableFromDate = new Date();

    // constructor(values: Object={}){
    //     Object.assign(this,values);
    // }

    // constructor(name,cost,quantity){
    //     this.name = name;
    //     this.cost = cost;
    //     this.quantity = quantity;
    // }

    constructor(){

    }
    
}