import { printOut,test, isArrOfM } from "./util.js";

function majority(arrIn){
    let count = arrCount(arrIn);
    let tresshold = arrIn.length/2;
    for(let i in count){
        if(count[i]>tresshold) return i;
    }

    return -1;
    
}

function arrCount(arrIn){
    let output = new Object();
    for (let i of arrIn){
        if(!containKey(output,i)){
            output[i]=1;
        }else{
            output[i]+=1;
        }
    }

    return output;
}

function containKey(objIn, keyIn){
    for(let i in objIn){
        if(i==keyIn) return true;
    }
    return false;
}

function mainClass(arrIn){
    let output = "";
    if(!Array.isArray(arrIn)){
        output = "error - wrong data type";
    }else if(!isArrOfM(arrIn,"number")){
        output = "error - input must be number(s)-only array";
    }else{
        output = majority(arrIn);
    }
    printOut("1-Majority",arrIn,output);
}

let testCase = [[[3,2,3],3],[[2,2,1,1,1,2,2],2],[[1,2,3,4,5],-1],[[1,2,3,3,3,3,3,3,3,4,5],3],["asdf","error - wrong data type"],[[2,2,1,1,"1",2,2], "error - input must be number(s)-only array"]];

test(testCase,mainClass);