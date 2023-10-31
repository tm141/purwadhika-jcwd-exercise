//terima array n
//deklarasi output = 0
//loop seluruh n
//jika typeof(n[i])=="number" maka output+=n[i]
//return output

import { printOut,test } from "./util.js";

function sumArrNum(n){
    let output = 0;
    for(let i=0;i<n.length;i++){
        if(typeof(n[i])=="number") output+=n[i];
    }
    return output;
}

function mainClass(n){
    let output = "";
    if(!Array.isArray(n)){
        output = "error - wrong data type"; 
    }else{
        output = sumArrNum(n);
    }
    printOut("3-Sum Array Number", n, output);
}

let testCase = [[["3",1,"string",null,"false",undefined,2], "3"], [["asdf",undefined,-345,null,"true",true,false,500],"155"],["asdfasdf", "error - wrong data type"]];

test(testCase,mainClass);