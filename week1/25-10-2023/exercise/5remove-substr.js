//terima input n dan rmv
//deklarasi outputString =""
//loop per karakter n hingga n.length-rmv.length
//jika menemukan yang sama maka di skip sebanyak rmv.length
//jika tidak menemukan yang sama maka outputString+=n.charAt(i)
//return output
import { printOut, testTwoInput } from "./util.js";

function rSubStr(n, rmv){
    let outputString = "";
    let rmvLength = rmv.length;
    let cek = false;
    for(let i = 0;i<n.length;i++){
        let sub = n.substring(i,i+rmvLength);
        if(sub==rmv&&!cek){
            i+=rmv.length-1;
            cek=true;
        }else{
            outputString+=n.charAt(i);
        }
    }
    return outputString;
}

function mainClass(n, rmv){
    let output = "";
    if(typeof(n)!="string"|| typeof(rmv)!="string"){
        output = "error - wrong data type";
    }else{
        output = rSubStr(n, rmv);
    }
    printOut("5-Remove Substring", `{${n}, ${rmv}}`,output);
}

let testCase = [[["Hello World", "ell"], "Ho World"],[["Hello Hello", "ell"], "Ho Hello"], [["Hello World!", 123], "error - wrong data type"], [["The Quick Brown Fox", "ick"], "The Qu Brown Fox"]];

testTwoInput(testCase, mainClass);