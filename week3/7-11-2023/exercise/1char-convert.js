import { printOut,test } from "./util.js";


function charConvert(stringIn){
    let output = 0;
    let stringTemp = stringIn.toLowerCase();
    for(let i=0;i<stringTemp.length;i++){
        let asciiTemp = stringTemp[i].charCodeAt(0)-96;
        let convertTemp = asciiTemp*(26**(stringTemp.length-i-1));
        output+=convertTemp;
    }

    return output;
}

function mainClass(stringIn){
    let output = "";
    if(typeof(stringIn)!="string"){
        output = "error - wrong data type";
    }else{
        output = charConvert(stringIn);
    }

    printOut("1-Character convert", stringIn,output);
}

let testCase = [["A",1],["B",2],["z",26],["AA",27],["aB",28],["aZ",52],["ba",53],["aaa",703],["aab",704]];

test(testCase,mainClass);