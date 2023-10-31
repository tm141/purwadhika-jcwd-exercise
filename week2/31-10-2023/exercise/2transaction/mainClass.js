import { Product } from "./product.js";
import { Transaction } from "./transaction.js";

class MainClass{
    products;
    transaction;
    constructor(){
        this.products = [new Product("korek api", 3000), new Product("pintu",100000), new Product("kipas angin", 25000)];
        this.transaction = new Transaction();
    }
    test(testCase){
        const batas = "-----------------------------------------";
        const judul = "2-Transaction"
        console.log(`${batas}\n${judul}\n${batas}\n`);
        console.log(`inventory product tersimpan: \n${batas}\n`)
        for(let i=0;i<this.products.length;i++){
            console.log(`produk ke-${i+1}\nnama produk = ${this.products[i].getName()}\nharga produk = ${this.products[i].getPrice()}\n`)
        }
        console.log(`\n${batas}\n${batas}\n`);
        for(let i=0;i<testCase.length;i++){
            console.log(`iterasi ke-${i+1}\n${batas}`)
            console.log(`total sebelum add product = ${this.transaction.showTotal()}\n${batas}`);
            console.log(`melakukan add product "${this.products[testCase[i][0]].getName()}" sebanyak ${testCase[i][1]}\n${batas}`);
            this.transaction.addProduct(this.products[testCase[i][0]],testCase[i][1]);
            console.log(`total setelah add product= ${this.transaction.showTotal()}\n${batas}\n${batas}\n`);
        }

        console.log(`hasil checkout= \n${this.transaction.checkout()}`);
    }
}

let tes = new MainClass();

let testCase = [[0,10],[1,1],[2,3]];

tes.test(testCase);