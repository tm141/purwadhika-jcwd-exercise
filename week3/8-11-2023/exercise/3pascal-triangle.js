import { printOut,test } from "./util.js";

function pascalTriangle(n){
    if(n===0){
        return [];
    }else if(n===1){
        return [[1]];
    }else if(n===2){
        return [[1],[1,1]];
    }
    let output = [[1],[1,1]];

    for(let i = 2;i<n;i++){
        let tempArr = new Array();
        tempArr.push(1);
        for(let j = 1;j<i;j++){
            let tempInt = output[i-1][j-1]+output[i-1][j];
            tempArr.push(tempInt);
        }
        tempArr.push(1);
        output.push(tempArr);
    }
    return output;
}

function mainClass(n){
    let output = "";
    if(typeof(n)!="number"){
        output = "error - wrong data type";
    }else{
        output = pascalTriangle(n);
    }
    printOut("3-Pascal Triangle",n,output);
}

let testCase = [[5,`[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]`],[1,`[[1]]`],[2,`[[1],[1,1]]`],[8,`[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1],[1,6,15,20,15,6,1],[1,7,21,35,35,21,7,1]]`],["asdf", "error - wrong data type"]];

test(testCase,mainClass);