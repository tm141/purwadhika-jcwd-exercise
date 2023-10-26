//menerima input n
//deklarasi output = ""
//deklarasi dan assign let counter = 1
//lakukan for let i=0 selama i<n ; i++
//lakukan for let j=0 selama j<i ; j++
//lakukan output+=(counter<10)? `0${counter}` : counter
// keluar kedua for lakukan return output

import { printOut,test } from "./util.js";

function triangleNumbers(n){
    let outputString = "\n";
    let counter = 1;
    for(let i=1;i<=n;i++){
        for(let j=0;j<i;j++){
            outputString+=(counter<10)? `0${counter} `: `${counter} `;
            counter++;
        }
        outputString+="\n";
    }
    return outputString;
}

function mainClass(n){
    let output = "";
    if(typeof(n)!="number"){
        output = "error - wrong data type";
    }else if(n<1){
        output = "error - input must be 1 or higher";
    }else{
        output = triangleNumbers(n);
    }

    printOut("1-Triangle Numbers",n,output);
}

let testCase = [[4, `01\n02 03\n04 05 06\n07 08 09 10`], [10, `01\n02 03\n04 05 06\n07 08 09 10\n11 12 13 14 15\n16 17 18 19 20 21\n22 23 24 25 26 27 28\n29 30 31 32 33 34 35 36\n37 38 39 40 41 42 43 44 45\n46 47 48 49 50 51 52 53 54 55 `], ["asdf", "error - wrong data type"], [0, "error - input must be 1 or higher"], [-4, "error - input must be 1 or higher"]]

test(testCase, mainClass);