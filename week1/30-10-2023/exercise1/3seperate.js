//soal ini akan saya kerjakan tanpa menggunakan built in split() function
//terima input string n
//deklarasi output = new Array()
//looping setiap char n
//deklarasi let word = ""
//if(n[i]!=" ") word+=n[i]else output.push(word);word=""
//keluar loop return output

import { printOut,test } from "./util.js";

function seperate(n){
    let outputArr = new Array();
    let word = "";
    for(let i=0;i<n.length;i++){
        if(n[i]==" "||i==n.length-1){
            if(i==n.length-1){
                word+=n[i];
            }
            outputArr.push(word);
            word="";
        }else{
            word+=n[i];
        }
    }
    return outputArr;
}

function mainClass(n){
    let output = "";
    if(typeof(n)!="string"){
        output = "error - wrong data type";
    }else{
        output = seperate(n);
    }

    printOut("3-Seperate", n, output);
}

let testCase = [["Hello World", `["Hello", "World"]`], ["The quick brown fox jumps over the lazy dog", `["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]`],[1234,"error - wrong data type"]];

test(testCase, mainClass);