import { printOut, test, sliceArrayFromN, isArrOfM } from "./util.js";

function maxProfit(arrIn){
    let min = findMin(arrIn);
    let minVal = arrIn[min];
    let temp = sliceArrayFromN(arrIn,min);
    let max = findMax(temp);
    if(max!=-1){
        let maxVal = temp[max];
        let output = maxVal-minVal;
        return output;
    }else if(arrIn[min]==temp[max]){
        return 0;
    }else{
        return 0;
    }
}

function findMin(arrIn){
    let min = Number.MAX_SAFE_INTEGER;
    let output = -1;
    for(let i=0;i<arrIn.length;i++){
        if(arrIn[i]<min){
            min = arrIn[i];
            output = i;
        }
    }
    return output;
}

function findMax(arrIn){
    let max = Number.MIN_SAFE_INTEGER;
    let output = -1;
    for(let i=0;i<arrIn.length;i++){
        if(arrIn[i]>max){
            max = arrIn[i];
            output = i;
        }
    }
    return output;
}

function mainClass(arrIn){
    let output = "";
    if(!Array.isArray(arrIn)){
        output = "error - wrong data type";
    }else if(!isArrOfM(arrIn,"number")){
        output = "error - input must be number(s)-only array";
    }else{
        output = maxProfit(arrIn);
    }

    printOut("4-Max Profit",arrIn,output);
}

let testCase = [[[7,1,5,3,6,4],5],[[7,6,4,3,1],0],[[29,5,7,4,87,981,345,768,34],977],["asdf", "error - wrong data type"], [[1,4,52,"asdf"],"error - input must be number(s)-only array"]];

test(testCase,mainClass);