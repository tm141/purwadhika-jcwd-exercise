//terima 2 input array
//deklarasi array output
//lakukan looping dan menambahkan kedua array sesuai index
//push dari hasil penambahan ke array output
//return output

import { printOutTwoInput,testTwoInput,isArrOfNum } from "./util.js";

function arrayAddition(n,n1){
    let output = new Array();
    for(let i=0;i<n.length;i++){
        output.push(n[i]+n1[i]);
    }
    return output;
}

function mainClass(n,n1){
    let output = "";
    if(!Array.isArray(n)||!Array.isArray(n1)){
        output = "error - wrong data type";
    }else if(!isArrOfNum(n)||!isArrOfNum(n1)){
        output = "error - input must be number(s)-only array";
    }else if(n.length!=n1.length){
        output = "error - both array need to have the same length";
    }else{
        output = arrayAddition(n,n1);
    }

    printOutTwoInput("4-Array Addition", n, n1, output);
}

let testCase = [[[[1,2,3],[3,2,1]],"[4,4,4]"], [[[5,4,87,1,343,1],[2,4,1,3245,5,31]],"[7,8,88,3246,348,32]"],[[[1,2,3],[1,"2",3]],"error - input must be number(s)-only array"],[[[1,2,3],"asdf"], "error - wrong data type"],[[[1,2,3],[1,2]], "error - both array need to have the same length"]];

testTwoInput(testCase,mainClass);