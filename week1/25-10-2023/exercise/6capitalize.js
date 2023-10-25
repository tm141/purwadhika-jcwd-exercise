//terima input string n
//split n dengan argumen " "
//deklarasi let outputString = ""
//loop dengan for sebanyak array n 
//iterasi charAt(0).toUpperCase
//iterasi outputString+=ncharAt(0).toUpperCase+n.slice(1)+" "
//keluar loop kembalikan hasil
import { printOut, test } from "./util.js";

function capitalize(n){
    let outputString = ""
    let temp = n.split(" ");
    for(let i=0;i<temp.length;i++){
        outputString+=temp[i].charAt(0).toUpperCase()+temp[i].slice(1);
        if(i<temp.length-1) outputString+= " ";
    }
    return outputString;
}

function mainClass(n){
    let output = "";
    if(typeof(n)!="string"){
        output = "error - wrong data type";
    }else{
        output = capitalize(n);
    }
    printOut("6-Capitalize",n,output);
}

let testCase = [["hello world", "Hello World"], ["the quick brown fox", "The Quick Brown Fox"], [123, "error - wrong data type"]];

test(testCase,mainClass);