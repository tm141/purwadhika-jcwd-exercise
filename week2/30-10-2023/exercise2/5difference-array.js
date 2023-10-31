//jawaban ini tidak akan memakai built in function include()
//deklarasi output = new Array()
//terima array n1 dan array n2
//looping n1
//looping n2
//cek apakah n1[i]ada dalam array n2
//jika tidak maka output.push(n1[i])
//kembalikan output

import { printOutTwoInput,testTwoInput } from "./util.js";

function differenceArray(n1,n2){
    let output = new Array();
    for(let i=0;i<n1.length;i++){
        if(!contain(n2,n1[i])){
            if(!contain(output,n1[i])){
                output.push(n1[i]);
            }
        }
    }

    for(let i=0;i<n1.length;i++){
        if(!contain(n1,n2[i])){
            if(!contain(output,n2[i])){
                output.push(n2[i]);
            }
        }
    }
    return output;
}

function contain(n1,n){
    for(let i=0;i<n1.length;i++){
        if(n1[i]===n) return true;
    }
    return false;
}

function mainClass(n1,n2){
    let output = "";
    if(!Array.isArray(n1)||!Array.isArray(n2)){
        output = "error - wrong data type";
    }else{
        output = differenceArray(n1,n2);
    }
    printOutTwoInput("5-Difference Array", n1,n2,output);
}

let testCase = [[[[1,2,3,4,5],[3,4,5,6,7]],`[1,2,6,7]`], [[["a","b",1,2,"3"],["b","c",3,5,1]],`["a",2,"3","c",5]`],[["asdf",["a","b",1,2,3]], "error - wrong data type"]];

testTwoInput(testCase,mainClass);
