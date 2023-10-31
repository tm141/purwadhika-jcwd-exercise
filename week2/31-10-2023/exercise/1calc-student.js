import {printOut, test, isArrOfM} from "./util.js";

function calcStudent(studentArr){
    let output = {
        "score": {
            "highest": most(studentArr,true,true),
            "lowest" : most(studentArr,true,false),
            "average": average(studentArr,true)
        },
        "age": {
            "highest": most(studentArr,false,true),
            "lowest" : most(studentArr,false,false),
            "average": average(studentArr,false)
        }
    }
    return output;
}

//valueType boolean
//valueType== true => score
//valueType== false => age
//mostType== true => highest
//mostType== false =>lowest
function most(studentArr, valueType, mostType){
    let output = (mostType)?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER;
    for(let i=0;i<studentArr.length;i++){
        let value = (valueType)?studentArr[i].score:studentArr[i].age;
        if(mostType){
            if(value>output){
                output = value;
            }
        }else{
            if(value<output){
                output = value;
            }
        }
    }

    return output;
}

//valueType boolean
//valueType==true => score;
//valueType==false => age;
function average(studentArr, valueType){
    let sum = 0;
    for (let i = 0; i < studentArr.length; i++) {
        let value = valueType?studentArr[i].score:studentArr[i].age;
        sum+=value;
    }

    let output = Math.floor(sum/studentArr.length);
    return output;
}

function mainClass(studentArr){
    let output = "";
    if(!Array.isArray(studentArr)){
        output = "error - wrong data type";
    }else if(!isArrOfM(studentArr,"object")){
        output = "error - input need to be Object(s)-only array";
    }else{
        output = calcStudent(studentArr);
    }
    printOut("1-Calculate Student",studentArr, output);
}

let testCase = [
    [
        [
            {
                "name": "student1",
                "email": "student1@yahoo.com",
                "age": 18,
                "score": 78,
            },
            {
                "name": "student2",
                "email": "student2@yahoo.com",
                "age": 19,
                "score": 57,
            },
            {
                "name": "student3",
                "email": "student3@yahoo.com",
                "age": 21,
                "score": 61,
            },
            {
                "name": "student4",
                "email": "student4@yahoo.com",
                "age": 42,
                "score": 89,
            }
        ],
        {
            "score" : {
                "highest": 89,
                "lowest": 57,
                "average" : 71.25
            },
            "age" : {
                "highest": 42,
                "lowest" : 18,
                "average": 25
            }
        }
    ],
    [
        [
            {
                "name": "student1",
                "email": "student1@yahoo.com",
                "age": 18,
                "score": 78,
            },
            {
                "name": "student2",
                "email": "student2@yahoo.com",
                "age": 19,
                "score": 57,
            },
            {
                "name": "student3",
                "email": "student3@yahoo.com",
                "age": 21,
                "score": 61,
            },
            "asdf"
        ],
        "error - input need to be Object(s)-only array"
    ],
    ["asdf", "error - wrong data type"]
]

test(testCase,mainClass);