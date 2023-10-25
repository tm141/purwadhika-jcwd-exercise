//ambil input string n
//deklarasi outputStirng = ""
//loop dari i=n.length hingga 0
//iterasi outputString+=charAt(i) 
//return hasil
import { printOut, test } from "./util.js";

function reverseString(n){
    let outputString = "";
    for(let i = n.length-1;i>=0;i--){
        outputString+=n.charAt(i);
    }
    return outputString;
}

function mainClass(n){
    let output = "";
    if(typeof(n)!="string"){
        output = "error - wrong data type";
    }else{
        output = reverseString(n);
    }
    printOut("7-Reverse String", n, output);
}

let testCase = [["home", "omeh"],["hello", "olleh"], ["hello hello", "olleh olleh"], [123, "error - wrong data type"]];

test(testCase, mainClass);