//terima 2 input object
//buat array yang isinya adalah key object 1
//buat array yang isinya adalah key object 2
//cek length dari kedua array jika beda maka return false
//bandingkan dengan include()/contain() dari setiap elemen object 2 ke obj 1, jika ada yg tidak sama maka return false
//bandingkan dengan include()/contain() dari setiap elemen object 1 ke obj 2, jika ada yg tidak sama maka return false
//telusuri setiap value dari setiap key object satu ==object 2 dengan key yang sama. jika ada yang beda maka return false
//jika sampai titik ini maka return true

import {testTwoInput, printOutTwoInput} from './util.js';

export function compareObject(objA, objB){
    let keyA = extractKeys(objA);
    let keyB = extractKeys(objB);

    if(keyA.length!=keyB.length){
        return false;
    }

    if(!compareArray(keyA,keyB)){
        return false;
    }

    if(!objValueCompare(objA,objB)){
        return false;
    }

    return true;
}

//semenjak tidak boleh pakai built in function jadi tidak memakai Object.keys(obj) sehingga membuat Object.keys sendiri
function extractKeys(objIn){
    let output = new Array();
    for(let i in objIn){
        output.push(i);
    }
    return output;
}

//fungsi include() dibuat sendiri karena include() built in
function arrContain(arrIn, valueIn){
    for(let i of arrIn){
        if(i===valueIn){
            return true;
        }
    }
    return false;
}

function objValueCompare(objAIn,objBIn){
    for(let i in objAIn){
        if(objBIn[i]!==objAIn[i]){
            return false;
        }
    }
    return true;
}

function compareArray(arrA,arrB){
    for(let i of arrA){
        if(!arrContain(arrB,i)) return false;
    }

    for(let i of arrB){
        if(!arrContain(arrA,i)) return false;
    }

    return true;
}

function mainClass(objA,objB){
    let output = "";
    if(typeof(objA)!="object"||typeof(objB)!="object"){
        output = "error - wrong data type";
    }else{
        output = compareObject(objA,objB);
    }
    printOutTwoInput("1-Compare Object",objA,objB,output);
}

let testCase = [
    [
        [
            {a:2},
            {a:1}
        ],
        "false"
    ],
    [
        [
            {a:"hello"},
            {a:1}
        ],
        "false"
    ],
    [
        [
            {a:1},
            {a:1}
        ],
        "true"
    ],
    [
        [
            {a:1,b:2,c:3,d:4,e:"asdf"},
            {a:1,b:2,c:3,d:4,e:"asdf"}
        ],
        "true"
    ],
    [
        [
            {a:1,b:2,c:3,d:5,e:"asdf"},
            {a:1,b:2,c:3,d:4,e:"asdf"}
        ],
        "false"
    ],
    [
        [
            {a:1,b:2,c:3,f:4,e:"asdf"},
            {a:1,b:2,c:3,d:4,e:"asdf"}
        ],
        "false"
    ],
    [
        [
            "asdf",
            123
        ],
        "error - wrong data type"
    ],
]

testTwoInput(testCase,mainClass);
