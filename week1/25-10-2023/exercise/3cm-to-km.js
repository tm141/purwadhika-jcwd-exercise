//menerima input n
//bagi input dengan 100000
//kembalikan hasil
import { printOut, test } from "./util.js";
function cmToKm(n){
    return `${n/100000} km`;
}

function mainClass(n){
    let output = "";
    if(typeof(n)!="number"){
        output = "error - wrong data type";
    }else if(n<0){
        output = "error - input can only be positive"
    }else{
        output = cmToKm(n);
    }
    const batas = "-----------------------------------------";
    printOut("3-Centimeter to Kilometer", n, output)
}

// function printOut(judul, input, output){
//     const batas = "-----------------------------------------";
//     console.log(`${batas}\n${judul}\n${batas}\ninput: ${input}\n${batas}\noutput: ${output}\n${batas}`);
// }

// n1= 100000
// n2= 543980
// n3= 10
// n4= -100000
// n5= "asdfqwer"
let testCase = [[100000,"1 km"], [543980, "5.4398 km"],[10,"0.0001 km"], [-100000, "error - input can only be positive"],["asdfqwer","error - wrong data type"]]
// function test(){
    

//     for(let i=1;i<test.length+1;i++){
//         console.log(`\n\n\ntest ${i}: `);
//         mainClass(test[i-1][0]);
//         console.log(`expected: ${test[i-1][1]}`);
//     }
// }

test(testCase, mainClass);