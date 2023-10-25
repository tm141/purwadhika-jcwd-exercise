//terima input n
//lakukan loop i=1 hingga i<=10
//deklarasi variabel outputString 
//dalam iterasi tambahkan outputString+=`${n} x ${i} = ${n*i}\n`
//selesai iterasi return hasil
import { printOut, test } from "./util.js";


function multTable(n){
    let outputString = "";
    for(let i=1;i<11;i++){
        outputString+=`${n} X ${i} = ${n*i}\n`;
    }
    return outputString;
}

function mainClass(n){
    let output = ""
    if(typeof(n)!="number"){
        output = "error - wrong data type";
    }else{
        output = multTable(n);
    }
    printOut("1-Multiplication Table", n, output);
}

// n1 = 9
// n2 = 0
// n3 = -9
// n4 = "asdf"

let testCase = [[9, `9 X 1 = 9\n9 X 2 = 18\n9 X 3 = 27\n9 X 4 = 36\n9 X 5 = 45\n9 X 6 = 54\n9 X 7 = 63\n9 X 8 = 72\n9 X 9 = 81\n9 X 10 = 90`], [0, `0 X 1 = 0\n0 X 2 = 0\n0 X 3 = 0\n0 X 4 = 0\n0 X 5 = 0\n0 X 6 = 0\n0 X 7 = 0\n0 X 8 = 0\n0 X 9 = 0\n0 X 10 = 0\n`],[-9, `-9 X 1 = -9\n-9 X 2 = -18\n-9 X 3 = -27\n-9 X 4 = -36\n-9 X 5 = -45\n-9 X 6 = -54\n-9 X 7 = -63\n-9 X 8 = -72\n-9 X 9 = -81\n-9 X 10 = -90`], ["asdf", "error - wrong data type"]]

test(testCase, mainClass);