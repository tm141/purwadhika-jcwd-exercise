//menerima input array n
//bikin function isEven(in) return in%2==0
//return n.filter(isEven);

import { printOut,test } from "./util.js";

function filterOdd(n){
    return n.filter(isOdd);
}


function isOdd(n){
    return Math.abs(n%2)==1;
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
        output = filterOdd(n);
    }

    printOut("1-Filter Odd", n, output);
}

let testCase = [[[432143,5346,-12341,0,546],"432143,-12341"],[[1,2,3,4,5,6,7,8,9,10], "1,3,5,7,9"],["asdf", "error - wrong data type"], [[1,"asdf",3,"4",5,6,7], "error - all array element need to be number type"]];

test(testCase, mainClass);