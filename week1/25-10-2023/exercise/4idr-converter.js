//menerima input n
//deklarasi let outputString = ""
//deklarasi counter = 1
//loop dari akhir n
//iterasi, tambahkan setiap char ke output, setiap 3 angka(dicek dengan counter) tambahkan koma lalu reset counter
//keluar loop tambahkan rp di depan dan ,00 dibelakang
//return output
import { printOut, test } from "./util.js";

function idrC(n){
    let outputString = "";
    let nString = n+"";
    let counter = 1;
    for(let i=nString.length-1;i>=0;i--){
        if((counter%3)!=0||i==0){
            outputString=nString.charAt(i)+outputString;
        }else{
            outputString = nString.charAt(i)+outputString;
            outputString = "."+outputString;
        }
        counter++;
    }
    outputString = `Rp. ${outputString},00`
    return outputString;
}

function mainClass(n){
    let output = ""
    if(typeof(n)!="number"){
        output = "error - wrong data type";
    }else if(n<0){
        output = "error - input must be positive int";
    }else{
        output = idrC(n);
    }
    printOut("4-IDR Converter", n, output);
}

// n1 = -100000
// n2 = 0
// n3 = 100000
// n4 = 53678234135
// n5 = "asdf"
let testCase = [[-100000,"error - input must be positive int"], [0, "Rp. 0,00"], [100000, "Rp. 100.000,00"], [53678234135, "Rp. 53.678.234.135,00"], ["asdf", "error - wrong data type"]];

test(testCase, mainClass);