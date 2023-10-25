//terima input string n
//deklarasi outputString = ""
//loop character n
//cek apakah dia uppercase
//jika ya ubah ke lowercase jika tidak ubah ke uppercase
//masukan char ke outputString
//keluar loop kembalikan output
import { printOut, test } from "./util.js";

function swapCase(n){
    let outputString = "";
    for(let i=0;i<n.length;i++){
        let c = n.charAt(i);
        if(c.toUpperCase()==c){
            outputString+=c.toLowerCase();
        }else{
            outputString+=c.toUpperCase();
        }
    }

    return outputString;
}

function mainClass(n){
    let output = "";
    if(typeof(n)!="string"){
        output = "error - wrong data type";
    }else{
        output = swapCase(n);
    }

    printOut("8-Swap Case",n,output);
}

let testCase = [["The QuiCk BrOwN Fox", "tHE qUIcK bRoWn fOX"], ["Hello World", "hELLO wORLD"], [123, "error - wrong data type"]];

test(testCase, mainClass)

