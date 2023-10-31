//terima input array n
//deklarasi let flagCalculated = new Array(), let output = 0
//telusuri array n dengan loop
//deklarasi flagFirst = true;
//telurusi array n dengan loop kedua kali
//jika n[i]==n[j] dan flagFirst ==true maka output+=(2*n[i]);n[i]="done" n[j]="done", jika flagFirst adalah false maka output+=n[j] n[j]="done"
//return output

import { printOut,test, isArrOfNum } from "./util.js";

function sumDupe(n){
    let n1 = [...n]
    let output = 0;
    for(let i=0;i<n1.length-1;i++){
        if(typeof(n1[i])=="number"){
            let flagFirst = true;
            for(let j=i+1;j<n1.length;j++){
                if(n1[i]==n1[j]){
                    if(flagFirst==true){
                        output+=n1[i]+n1[j];
                        n1[j]= "done";
                        flagFirst=false;
                    }else{
                        output+=n1[j];
                        n1[j]="done";
                    }
                }
            }
        }
    }
    return output;
}

function mainClass(n){
    let output = "";
    if(!Array.isArray(n)){
        output = "error - wrong data type";
    }else if(!isArrOfNum(n)){
        output = "error - input must be number(s)-only array";
    }else{
        output = sumDupe(n);
    }
    printOut("4-Sum Dupe",n,output);
}

let testCase = [[[10,20,40,10,50,30,10,60,10], "40"],[[10,20,45,20,50,10,40,20,10],"90"],["Asdf", "error - wrong data type"], [[1,2,"asdfasdf",1,2,3,3], "error - input must be number(s)-only array"]];

test(testCase,mainClass);