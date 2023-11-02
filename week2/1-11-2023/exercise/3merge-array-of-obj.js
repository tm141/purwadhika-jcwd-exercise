//menerima input arr of obj a dan arr of obj b
//input arr of bj a ke output
//looping arr of obj b dan setiap object di compare dengan fungsi compare yang sudah dibuat di latihan sebelumnya
//jika tidak sama maka push.

import { compareObject } from "./1compare-obj.js";
import { testTwoInput,printOutTwoInput, isArrOfM } from "./util.js";

function mergeArrayofObject(arrA,arrB){
    let output = new Array();
    output = [...arrA];
    for(let i of arrB){
        let contain = false;
        for(let j of arrA){
            if(compareObject(i,j)){
                contain=true;
            }
        }
        if(!contain){
            output.push(i);
        }
    }
    return output;
}

function mainClass(arrA,arrB){
    let output = "";
    if(!Array.isArray(arrA)||!Array.isArray(arrB)){
        output = "error - wrong data type";
    }else if(!isArrOfM(arrA,"object") || !isArrOfM(arrB,"object")){
        output= "error - input need to be object(s)-only array";
    }else{
        output = mergeArrayofObject(arrA,arrB);
    }
    printOutTwoInput("3-Merge Array of Object",arrA,arrB,output);
}

let testCase = [
    [
        [
            [
                { name: `Student 1`, email : `student1@mail.com` },
                { name: `Student 2`, email : `student2@mail.com` }
            ],
            [
                { name: `Student 1`, email : `student1@mail.com` },
                { name: `Student 3`, email : `student3@mail.com` }
            ]
        ],
        `[{ name: ‘Student 1’, email : ‘student1@mail.com’ },{ name: ‘Student 2’, email : ‘student2@mail.com’ },{ name: ‘Student 3’, email : ‘student3@mail.com’ }]`
    ],
    [
        [
            [
                { name: `Student 1`, email : `student1@mail.com` },
                { name: `Student 2`, email : `student2@mail.com` }
            ],
            [
                { name: `Student 1`, email : `student1@mail.com` },
                { name: `Student 2`, email : `student2@mail.com` }
            ]
        ],
        `[{ name: ‘Student 1’, email : ‘student1@mail.com’ },{ name: ‘Student 2’, email : ‘student2@mail.com’ }]`
    ],

    [
        [
            [
                { name: `Student 1`, email : `student1@mail.com` },
                { name: `Student 2`, email : `student2@mail.com` }
            ],
            [
                { name: `Student 1`, email : `student1@mail.com` },
                { name: `Student 2`, email : `student3@mail.com` }
            ]
        ],
        `[{ name: ‘Student 1’, email : ‘student1@mail.com’ },{ name: ‘Student 2’, email : ‘student2@mail.com’ },{ name: ‘Student 2’, email : ‘student3@mail.com’ }]`
    ],
    [
        [
            [
                "asdf",
                { name: `Student 2`, email : `student2@mail.com` }
            ],
            [
                { name: `Student 1`, email : `student1@mail.com` },
                { name: `Student 3`, email : `student3@mail.com` }
            ]
        ],
        `error - input need to be object(s)-only array`
    ],
    [
        [
            "asdf", 123
        ],
        `error - wrong data type`
    ],
   
]

testTwoInput(testCase,mainClass);