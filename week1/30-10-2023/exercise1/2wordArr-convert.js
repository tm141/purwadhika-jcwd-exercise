//terima input array n
//dekalarasi outputString = ""
//iterasi n
//outputString+=`${n[i]},`
//if i==n-1 outputString+=` and ${n[i]}`;
import { printOut,test, isWordArray } from "./util.js";

function wordArrConvert(n){
    let outputString = "";
    for(let i=0;i<n.length;i++){
        (i==n.length-1)?outputString+=` and ${n[i]}`:outputString+=`${n[i]},`;
    }
    return outputString;
}

function mainClass(n){
    let output = "";
    if(!Array.isArray(n)){
        output = "error - wrong data type";
    }else if(!isWordArray(n)){
        output = "error - input must be string-only array"
    }else{
        output = wordArrConvert(n);
    }
    printOut("2Word Array Converter", n, output);
}

let testCase = [[["apple", "banana", "cherry", "date"], "apple,banana,cherry, and date"], [["the","quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], "the,quick,brown,fox,jumps,over,the,lazy, and dog"],[1234, "error - wrong data type"], ["asdf", "error - wrong data type"], [["the", "quick", 12345, "12345"], "error - input must be string-only array"]];

test(testCase, mainClass);