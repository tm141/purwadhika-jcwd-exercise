import { testTwoInput,printOutTwoInput } from "./util.js";

function anagram(strA,strB){
    let countStrA = extractCharCount(strA);
    let countStrB = extractCharCount(strB);

    for(let i in countStrA){
        if(isObjContainKey(countStrB,i)){
            if(countStrA[i]!==countStrB[i]) return false;
        }else{
            return false;
        }
    }
    for(let i in countStrB){
        if(isObjContainKey(countStrA,i)){
            if(countStrB[i]!==countStrA[i]) return false;
        }else{
            return false;
        }
    }
    

    return true;
}

function extractCharCount(arrIn){
    let flag = new Object();
    for(let i = 0;i<arrIn.length;i++){
        let tempKey = arrIn[i];
        if(isObjContainKey(flag, arrIn[i])){
            flag[tempKey]+=1;
        }else{
            flag[tempKey]=1;
        }
    }

    return flag;
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

function mainClass(strA,strB){
    let output = "";
    if(typeof(strA)!="string"||typeof(strB)!="string"){
        output = "error - wrong data type";
    }else{
        output = anagram(strA,strB);
    }

    printOutTwoInput("3-Extract Single",strA,strB,output);
}

let testCase = [[["anagram","nagaram"],true],[["rat","car"],false],[["nascar","carnas"],true],[[1234,"Asdf"],"error - wrong data type"]];

testTwoInput(testCase,mainClass);