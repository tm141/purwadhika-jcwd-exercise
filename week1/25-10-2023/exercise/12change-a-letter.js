//menerima input string n, char c
//deklarasi outputString = ""
//loop setiap char n
//jika n.charAt[i]==c maka outputString+=*
//else outputString+=n.charAt[i]
//keluar looping keluarkan output

import { printOut,testTwoInput } from "./util.js";

function changeALetter(n, c){
    let outputString = "";
    for(let i=0;i<n.length;i++){
        let temp = n.charAt(i);
        if((temp.toLowerCase()===c.toLowerCase())){
            outputString+="*";
        }else{
            outputString+=temp;
        }
    }
    return outputString;
}

function mainClass(n,c){
    let output="";
    if(typeof(n)!="string"||typeof(c)!="string"){
        output = "error - wrong data type";
    }else if(c.length>1){
        output = "error - c need to be a single character";
    }else{
        output = changeALetter(n,c);
    }
    printOut("12-Change a Letter", `${n}, ${c}`, output);
}

let testCase = [[["An apple a day keeps the doctor away","a"], "*n *pple * d*y keeps the doctor *w*y"], [["An apple a day keeps the doctor away","e"],"An appl* a day k**ps th* doctor away"],[["An apple a day keeps the doctor away","asdf"],"error - c need to be a single character"], [[123,"a"],"error - wrong data type"]];

testTwoInput(testCase,mainClass);

