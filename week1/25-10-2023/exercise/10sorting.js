//terima input array n
//deklarasi array output kosong
//loop array n
//cari angka terkecil dari array n
//masukan angka terkecil ke array output
//keluar dari looping, kembalikan output

import { printOut,test } from "./util.js";

function sorting(n){
    let temp = [...n];
    let output = [];
    for(let i=0;i<temp.length;i++){
        let min = findMin(temp);
        output.push(temp[min]);
        temp[min]= Number.MAX_SAFE_INTEGER;
    }
    return output;
}

function findMin(n){
    let min = Number.MAX_SAFE_INTEGER;
    let output;
    for(let i=0;i<n.length;i++){
        if(n[i]<min){
            min=n[i];
            output = i;
        }
    }

    return output;
}

function isArrayNumber(n){
    let output = true;
    for(let i=0;i<n.length;i++){
        if(typeof(n[i])!="number"){
            output = false;
        }
    }
    return output;
}

function mainClass(n){
    let output = "";
    if(!Array.isArray(n) || !isArrayNumber(n)){
        output = "error - wrong data type";
    }else{
        output = sorting(n);
    }
    printOut("10-Sorting", n, output);
}

let testCase = [[[42,27,18], [18,27,42]], [[2451,-24,123,80,50,77,6112],[-24,50,77,80,123,2451,6112]],[[42, "asdf", 2], "error - wrong data type"],["asdfasdf","error - wrong data type"], [12341,"error - wrong data type"] ];

test(testCase,mainClass);