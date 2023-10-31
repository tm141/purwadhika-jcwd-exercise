//program ini tidak menggunakan built in function sort()
//terima input array n
//cari min value dari array n
//remove min value
//cari min value dari updated array n
//return min value ke 2.

import { printOut,test, isArrOfNum } from "./util.js";

function secondMin(n){
    let nTemp = [...n];
    nTemp[findMin(nTemp)]= Number.MAX_SAFE_INTEGER;
    return nTemp[findMin(nTemp)];
}

function findMin(n){
    let min = Number.MAX_SAFE_INTEGER;
    let index = "";
    for(let i=0;i<n.length;i++){
        if(n[i]<min){
            min = n[i];
            index = i;
        }
    }

    return index;
}

function mainClass(n){
    let output = "";
    if(!Array.isArray(n)){
        output = "error - wrong data type";
    }else if(!isArrOfNum(n)){
        output = "error - input must be number-only array";
    }else{
        output = secondMin(n);
    }

    printOut("2-Second Min", n, output);
}

let testCase = [[[5,3,7,1,2,6],"2"], [[-123,4576245,-5647,300,562,0], "-123"], ["asdf", "error - wrong data type"]];

test(testCase,mainClass);