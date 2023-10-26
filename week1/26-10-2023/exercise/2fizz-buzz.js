//terima input n
//bikin let outputString = ""
//looping dari let i=1 selama i<=n ; i++
//lakukan pengecekan dengan modulo 
// mod 3 =0?
// if yes are mod 5 == 0? if yes: outputString+=FizzBuzz
// if no outputString+=Fizz
// else outputString+=i

import { printOut,test } from "./util.js";

function fizzBuzz(n){
    let outputString = "";
    for(let i=1;i<=n;i++){
        if(i%3==0){
            if(i%5==0){
                outputString+=`FizzBuzz`;
            }else{
                outputString+=`Fizz`;
            }
        }else if(i%5==0){
            outputString+=`Buzz`;
        }else{
            outputString+=`${i}`
        }
        (i==n)? outputString+=" ":outputString+=", ";
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
        output = fizzBuzz(n);
    }
    printOut("2-Fizz Buzz",n,output);
}

let testCase = [[6, "1, 2, Fizz, 4, Buzz, Fizz"], [15, "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz"], ["asdf", "error - wrong data type"], [0, "error - input must be 1 or higher", [-6, "error - input must be 1 or higher"]]]

test(testCase, mainClass);