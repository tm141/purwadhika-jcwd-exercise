import { printOut,test, isArrOfM } from "./util.js";

function objSwitchWrapper(arrIn){
    let output = new Array();
    for(let i of arrIn){
        output.push(objSwitch(i));
    }
    return output;
}

function objSwitch(objIn){
    let output = new Object();
    for(let i in objIn){
        output[objIn[i]]=i;
    }
    return output;
}

function mainClass(arrIn){
    let output = "";
    if(!Array.isArray(arrIn)){
        output = "error - wrong data type";
    }else if(!isArrOfM(arrIn,"object")){
        output = "error - input need to be object(s)-only array"
    }else{
        output = objSwitchWrapper(arrIn);
    }
    printOut("4-Object Switch",arrIn,output);
}

let testCase = [
    [
        [
            {
                name: `David`,age: `20`
            }
        ],
        `[{David: \`name\`, 20:\`age\`}]`
    ],
    [
        [
            
            { name: `Student 1`, email : `student1@mail.com` },
            { name: `Student 2`, email : `student2@mail.com` },
            { name: `Student 3`, email : `student3@mail.com` },
            { name: `Student 4`, email : `student4@mail.com` }
            
        ],
        `[{"Student 1":"name","student1@mail.com":"email"},{"Student 2":"name","student2@mail.com":"email"},{"Student 3":"name","student3@mail.com":"email"},{"Student 4":"name","student4@mail.com":"email"}]`
    ],
    [
        [
            
            "asdf",
            { name: `Student 2`, email : `student2@mail.com` },
            { name: `Student 3`, email : `student3@mail.com` },
            { name: `Student 4`, email : `student4@mail.com` }
            
        ],
        `error - input need to be object(s)-only array`
    ],
    [
        123,
        `error - wrong data type`
    ],
]

test(testCase,mainClass);