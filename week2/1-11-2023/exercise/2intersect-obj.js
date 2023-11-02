import { printOutTwoInput,testTwoInput } from "./util.js";

function intersectObject(objAIn,objBIn){
    let output = new Array();
    let containA = objIntersect(objAIn,objBIn);
    for(let i of containA){
        let temp = new Object();
        temp[i]=objAIn[i];
        output.push(temp);
    }

    return output;
}

function objIntersect(objAIn,objBIn){
    let output = new Array();
    for(let i in objAIn){
        if(objBIn[i]===objAIn[i]){
            output.push(i);
        }
    }
    return output
}

function arrOfObjKeyContain(arrAIn,keyBIn){
    for(let i in arrAIn){
        for(let j of i){
            if(keyBIn===j){
                return true;
            }
        }
    }
    return false;
}

function mainClass(objAIn, objBIn){
    let output = "";
    if(typeof(objAIn)!="object"||typeof(objBIn)!="object"){
        output = "error - wrong data type";
    }else{
        output = intersectObject(objAIn,objBIn);
    }

    printOutTwoInput("2-Intersect Object", objAIn,objBIn, output);
}

let testCase = [
    [
        [
            {a:1,b:2,c:4,d:4,e:"asdf"},
            {a:2,b:2,c:3,d:4,e:"asdf"}
        ],
        `{b:2,d:4,e:"asdf"}`
    ],
    [
        [
            {a:"hello"},
            {a:1}
        ],
        "{}"
    ],
    [
        [
            {a:1},
            {a:1}
        ],
        "{a:1}"
    ],
    [
        [
            {a:1,b:2,c:3,d:4,e:"asdf"},
            {f:1,g:2,c:3,h:4,e:"asdf"}
        ],
        `{c:3,e:"asdf}`
    ],
    [
        [
            {a:1,b:2,c:3},
            {c:3,d:4,e:"asdf",o:23,a:1}
        ],
        `c:3,a:1`
    ],
    [
        [
            {c:3,f:4,e:"asdf",a:1,b:2},
            {a:1,b:2}
        ],
        `a:1,b:2`
    ],
    [
        [
            {a:1,b:2,c:3,f:4,e:"asdf"},
            {a:1,b:2,c:3,d:4,e:"asdf"}
        ],
        `a:1,b:2,c:3,e:"asdf"`
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