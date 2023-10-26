//terima input string s
// lakukan s.split(" ")
//kembalikan hasil

import { printOut,test } from "./util.js";

function stringSplit(s){
    return JSON.stringify(s.split(" "));
}

function mainClass(s){
    let output = "";
    if(typeof(s)!="string"){
        output = "error - wrong data type";
    }else{
        output = stringSplit(s);
    }

    printOut("5-String Split",s,output);
}

let testCase = [["Hello World", `["Hello","World"]`],["The quick brown fox", `["The","quick","brown","fox"]`], [1234, "error - wrong data type"]];

test(testCase, mainClass);