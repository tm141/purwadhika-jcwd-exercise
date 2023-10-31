//pengerjaan soal ini tidak memakai built in function concat()
//terima 2 input array
//copy array 1 ke array output
//loop sebanyak array ke 2 
//output.push(arr2[i])
//keluar loop return output

import { printOutTwoInput,testTwoInput } from "./util.js";

function concatArray(n1,n2){
    let output = [...n1];
    for(let i=0;i<n2.length;i++){
        output.push(n2[i]);
    }
    return output;
}

function mainClass(n1,n2){
    let output = "";
    if(!Array.isArray(n1)||!Array.isArray(n2)){
        output = "error - wrong data type"
    }else{
        output = concatArray(n1,n2);
    }
    printOutTwoInput("3-Concat Array", n1, n2, output);
}

let testCase = [[[[1,2,3],[4,5,6]],"[1,2,3,4,5,6]"], [[[-1,-2,"asdf"],["qwer",6,102324]],`[-1,-2,"asdf","qwer",6,102324]`], [[[1,2,3],"asdf"], "error - wrong data type"], [["qwer",[1,2,3]], "error - wrong data type"],[["asdf","qwer"], "error - wrong data type"]];

testTwoInput(testCase,mainClass);