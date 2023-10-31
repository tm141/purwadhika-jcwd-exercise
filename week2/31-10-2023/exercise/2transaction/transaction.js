import { Product } from "./product.js";

//products: [...[new product(), qty=0]];

export class Transaction{
    #total;
    #products;

    constructor(){
        this.#total=0;
        this.#products=new Array();
    }

    getTotal(){
        return this.#total;
    }

    getProduct(){
        return this.#products;
    }

    setTotal(total){
        this.#total=total;
    }

    setProduct(product){
        this.#products=product;
    }

    addProduct(productIn, qty=1){
        let contain = false;
        for(let i=0;i<this.#products.length;i++){
            if(productIn.getName()==this.#products[i][0].name){
                this.#products[i][1]+=qty;
                contain=true;
            }
        }
        if(!contain){
            this.#products.push([productIn,qty]);
        }
        this.#total+=productIn.getPrice()*qty;
    }

    showTotal(){
        return this.getTotal();
    }

    checkout(){
        let output = "";
        const batas = "-----------------------------------------";
        const judul = `Checkout Receipt`;
        output+=`${batas}\n${judul}\n${batas}\n`;
        output+=`Nama Barang\tQty\tPrice\tTotal\n`;
        for(let i=0;i<this.#products.length;i++){
            let tabName = (this.#products[i][0].getName().length<9)?`\t\t`:`\t`;
            let tabPrice = ((this.#products[i][0].getPrice()+"").length<7)?`\t`:``;
            let tabTotal = ((this.#products[i][0].getPrice()+"").length<6)?`\t`:``;
            output+=`${this.#products[i][0].getName()}${tabName}|${this.#products[i][1]}|${tabPrice}|${this.#products[i][0].getPrice()}|${tabTotal}|${this.#products[i][1]*this.#products[i][0].getPrice()}\n`;
        }
        output+=`\n\nTotal = ${this.showTotal()}`;
        output+=`\n${batas}`
        this.setProduct(new Array());
        this.setTotal(0);
        return output;
    }
}