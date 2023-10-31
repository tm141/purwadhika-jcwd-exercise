export class Product{
    #name;
    #price;

    constructor(name, price){
        this.#name = name;
        this.#price = price;
    }

    getName(){
        return this.#name;
    }

    getPrice(){
        return this.#price;
    }

    setName(name){
        this.#name=name;
    }
    setPrice(price){
        this.#price=price;
    }
}