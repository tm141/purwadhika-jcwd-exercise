import { test,printOut } from "./util.js";

function factorialRecursive(n){
    if(n==1){
        return 1;
    }else{
        return n*factorialRecursive(n-1);
    }
}

function mainClass(n){
    let output = "";
    if(typeof(n)!="number"){
        output = "error - wrong data type";
    }else if(n<1){
        output = "error - input need to be 1 or higher";
    }else{
        output = factorialRecursive(n);
    }

    printOut("5-Factorial Recursive", n, output);
}

let testCase = [[5,"120"],[10,"3628800"],[3,"6"],[15,"1307674368000"],["asdf","error - wrong data type"], [0,"error - input need to be 1 or higher"], [-10,"error - input need to be 1 or higher"]];

test(testCase,mainClass);