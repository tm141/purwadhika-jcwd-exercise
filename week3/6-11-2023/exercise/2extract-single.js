import { test,printOut, isArrOfM } from "./util.js";

function extractSingle(arrIn){
    let flag = new Object();
    for(let i = 0;i<arrIn.length;i++){
        let tempKey = arrIn[i];
        if(isObjContainKey(flag, arrIn[i])){
            flag[tempKey]+=1;
        }else{
            flag[tempKey]=1;
        }
    }
    let output = new Array();
    for(let i in flag){
        if(flag[i]===1){
            output.push(i);
        }
    }
    return output;
}


function isObjContainKey(objIn,keyIn){
    let keys = Object.keys(objIn);
    for(let i of keys){
        if(i==keyIn){
            return true;
        }
    }
    return false;
}

function mainClass(arrIn){
    let output = "";
    if(!Array.isArray(arrIn)){
        output = "error - wrong data type";
    }else if(!isArrOfM(arrIn,"number")){
        output = "error - input need to be number(s)-only array";
    }else{
        output = extractSingle(arrIn);
    }

    printOut("2-Extract Single",arrIn,output);
}

let testCase = [[[2,2,1],1],[[4,1,2,1,2],4],["asdf","error - wrong data type"],[[1,2,1,2,"Asdf"],"error - input need to be number(s)-only array"], [[1],1]];

test(testCase,mainClass);