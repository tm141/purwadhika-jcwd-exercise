//terima input array n
//deklarasi output = new Array();
//loop n jika typeof(n)!="object"||typeof(n)!="function"{output.push typeof(n)}
//return output

import { printOut,test } from "./util.js";

function primitiveOnly(n){
    let output = new Array();

    for(let i=0;i<n.length;i++){
        let typeTemp = typeof(n[i]);
        if(typeTemp!="object"&&typeTemp!="function"){
            if(typeTemp=="string"||typeTemp=="number") {
                output.push(n[i]);
            }else{
                output.push(typeTemp);
            }

        }
    }

    return output;
}

function mainClass(n){
    let output = "";
    if(!Array.isArray(n)){
        output = "error - wrong data type";
    }else{
        output = primitiveOnly(n);
    }

    printOut("1-Primitive Only", n, output);
}

let testCase = [[[1,[],undefined,{},"string",{},[]],`[1, undefined, "string"]`],[[1,[],{},{},["string"],{},[],undefined,undefined,5,2,"asdf"],`[1, undefined, undefined, 5,2,"asdf"]`], ["asdf", "error - wrong data type"]];

test(testCase, mainClass);