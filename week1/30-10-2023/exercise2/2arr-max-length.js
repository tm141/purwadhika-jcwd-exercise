//terima input n, terima input ...num
//for loop sebanyak n masukan ...num ke output array
//return output
import { isArrOfNum, printOutTwoInput, testTwoInput } from "./util.js";

function arrMaxLength(n, ...num){
    let output = new Array();
    let counter = 0;
    for(let number of num[0]){
        if(counter<n) {
            output.push(number);
            counter++;
        }
    }

    return output;
}

function mainClass(n, ...num){
    let output = "";
    if(typeof(n)!="number"){
        output = "error - length need to be a number";
    }else if(!isArrOfNum(num)){
        output = "error - input value need to be integer";
    }else if(n<0){
        output = "error - length need to be a positive number";
    }else{
        output = arrMaxLength(n, num);
    }

    printOutTwoInput("2Array with Max Length", n, num,output);
}

//test cannot use util test funct because the number of parameter is dynamic
console.log(`\n\n\nTest 1: `);
mainClass(5,5,10,24,3,6,7,8);
console.log(`expected: "5,10,24,3,6"`);

console.log(`\n\n\nTest 2: `);
mainClass(10,5,10,24,3,6,7,8);
console.log(`expected: "5,10,24,3,6,7,8"`);

console.log(`\n\n\nTest 3: `);
mainClass(3,5,234,6436,23,-12);
console.log(`expected: "5,234,6436"`);

console.log(`\n\n\nTest 4: `);
mainClass(0,5,1,2,5);
console.log(`expected: ""`);

console.log(`\n\n\nTest 5: `);
mainClass(-2,5,4,3);
console.log(`expected: "error - length need to be a positive number"`);

console.log(`\n\n\nTest 6: `);
mainClass("a",5,2,3,1);
console.log(`expected: "error - length need to be a number"`);

console.log(`\n\n\nTest 7: `);
mainClass(3,5,4,"asdf",2,1);
console.log(`expected: "error - input value need to be integer"`);