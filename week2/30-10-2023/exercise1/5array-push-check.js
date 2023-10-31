//soal ini akan dikerjakan tanpa menggunakan fungsi built in include()
//terima input array n1 dan input element yang akan di push n2
//telusuri array n1 apakah memiliki element n2
//jika tidak maka n1.push(n2)
//return n1

import { printOutTwoInput,testTwoInput } from "./util.js";

function arrayPushCheck(n1,n2){
    if(!contain(n1,n2)) n1.push(n2);
    return n1;
}

function contain(n1,n2){
    for(let i=0;i<n1.length;i++){
        if(n1[i]==n2) return true;
    }
    return false;
}

function mainClass(n1,n2){
    let n1Temp = [...n1];
    let output = "";
    if(!Array.isArray(n1)||(Array.isArray(n2)&& n2.length!=1)){
        output = "error - wrong data type";
    }else {
        output = arrayPushCheck(n1,n2);
    }

    printOutTwoInput("5-Array Push Check", n1Temp, n2, output);
}

let testCase = [[[[1,2,3,4], 4], `[1,2,3,4]`], [[[1,2,3,4],7],`[1,2,3,4,7]`], [[[1,2,"a","b","c"],"b"], `[1,2,"a","b","c"]`],[[[1,2,"a","b","c"],"d"],`[1,2,"a","b","c","d"]`],[[[1,2,"aasdf","ber","cfgs"],4],`1,2,"aasdf","ber","cfgs",4`],[[[1,2,3],[1,2,3]], `error - wrong data type`],[["asdf",[1,2,3]], `error - wrong data type`]];

testTwoInput(testCase,mainClass);