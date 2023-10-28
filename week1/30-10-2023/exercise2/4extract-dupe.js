//soal ini tidak akan memakai built in funciton include()
//terima input array n
//deklarasi array output
//loop dalam loop n untuk membandingkan setiap elemen satu sama lain.
//jika ada elemen lain yang sama maka cek apakah di array output sudah terdapat elemen tersebut
//jika tidak ada di elemen output maka tambahkan ke array output.

import { printOut,test } from "./util.js";

function removeDupe(n){
    let output = new Array();
    for(let i=0;i<n.length-1;i++){
        for(let j=i+1;j<n.length;j++){
            if(n[i]==n[j]){
                if(!contain(output,n[i])) output.push(n[i]);
            }
        }
    }

    return output;
}

function contain(n,n1){
    for(let i=0;i<n.length;i++){
        if(n[i]===n1) return true;
    }
    return false;
}

function mainClass(n){
    let output = "";
    if(!Array.isArray(n)){
        output = "error - wrong data type";
    }else{
        output = removeDupe(n)
    }
    printOut("4-extract Duplicate",n,output);
}

let testCase = [[[1,2,2,2,3,3,4,5,5],"[2,3,5]"],[[86,86,4315,23,4,372,4315], "[86,4315]"],["asdf","error - wrong data type"], [["asdf","qwert", "a","b","qwert","a"], `["qwert","a"]`]];

test(testCase,mainClass);