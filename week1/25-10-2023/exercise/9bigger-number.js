//terima 2 input
//bandingkan siapa yang lebih besar
//return yang lebih besar

import { printOut, testTwoInput } from "./util.js";

function biggerNumber(a, b){
    let output;
    a>b ? output =  a: output = b;
    return output;
}

function mainClass(a, b){
    let output = "";
    if(typeof(a)!="number" && typeof(b)!="number"){
        output = "error - wrong data type";
    }else if(a===b){
        output = "a dan b sama";
    }else{
        output = biggerNumber(a, b);
    }
    printOut("9-Bigger Number", `${a}, ${b}`, output);
}

let testCase = [[[42,27],42],[[2326,-2135],2326],[[0,-100],0],[[20,20],"a dan b sama"],[["asdf", "qwer"], "error - wrong data type"]];

testTwoInput(testCase, mainClass);

