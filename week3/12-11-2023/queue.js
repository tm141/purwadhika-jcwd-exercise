export class Queue{
    #orders;
    constructor(orders=[]){
        this.#orders = orders;
    }

    getOrders(){
        return this.#orders;
    }

    setOrders(orders){
        this.#orders=orders;
    }

    
}