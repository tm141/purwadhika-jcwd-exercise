//terima input n
//dengan switch lihat typeof dari n
//keluarkan sesuai dengan spek soal

import { printOut,test } from "./util.js";

function numTypeOf(n){
    switch(typeof(n)){
        case "string":
            return 1;
            break;
        case "number":
            return 2;
            break;
        default:
            return 3;
            break;
    }
}

function mainClass(n){
    printOut("11-TypeOf Number Classification", n, numTypeOf(n));
}

let testCase = [["hello",1],[123,2],[[1,2,3],3]];

test(testCase,mainClass);