//menerima input array n
//bikin function isEven(in) return in%2==0
//return n.filter(isEven);

import { printOut,test } from "./util.js";

function filterEven(n){
    return n.filter(isEven);
}

function isEven(n){
    return n%2==0;
}

function isNumArr(n){
    let output = true;
    for(let i=0;i<n.length;i++){
        if(typeof(n[i])!="number"){
            output=false;
        }
    }
    return output;
}

function mainClass(n){
    let output = "";
    if(!Array.isArray(n)){
        output = "error - wrong data type";
    }else if(!isNumArr(n)){
        output = "error - all array element need to be number type";
    }else{
        output = filterEven(n);
    }

    printOut("4-Filter Even", n, output);
}

let testCase = [[[1,2,3,4,5,6,7,8,9,10], "2,4,6,8,10"],["asdf", "error - wrong data type"], [[1,"asdf",3,"4",5,6,7], "error - all array element need to be number type"]];

test(testCase, mainClass);