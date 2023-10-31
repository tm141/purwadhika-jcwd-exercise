//soal ini akan saya kerjakan dengan fokus ke algoritma tanpa menggunakan min/max yang sudah disediakan js. 
//terima input array n
//cari nilai max dari n
//assign max = Number.MIN_SAFE_INTEGER
//iterasi n, jika n[i]>max maka max = n[i]
//return max
//untuk min, min = Number.MAX_SAFE_INTEGER
//iterasi n, jika n[i]<min maka min = n[i]
//return min
//untuk avg makan akan di sum seluruh array n lalu dibagi n.length

import { printOut,test, isArrOfNum } from "./util.js";

function minimal(n){
    let min = Number.MAX_SAFE_INTEGER;
    for(let i=0;i<n.length;i++){
        if(n[i]<min)min=n[i];
    }
    return min;
}

function maximal(n){
    let max = Number.MIN_SAFE_INTEGER;
    for(let i=0;i<n.length;i++){
        if(n[i]>max)max=n[i];
    }
    return max
}

function average(n){
    let sum = 0;
    for(let i=0;i<n.length;i++){
        sum+=n[i];
    }
    return sum/n.length;
}

function outputWrapper(n){
    return `{lowest: ${minimal(n)}, highest: ${maximal(n)}, average: ${average(n)}}`;
}

function mainClass(n){
    let output = "";
    if(!Array.isArray(n)){
        output = "error - wrong data type";
    }else if(!isArrOfNum(n)){
        output = "error - input must be number(s)-only array";
    }else{
        output = outputWrapper(n);
    }
    printOut(`1-Min Max Avg`, n, output);
}

let testCase = [[[12,5,23,18,4,45,32],`{lowest: 4, highest: 45, average: 19,857142857}`],[[5,7,2,867,1,24,57,7893,2,-123,-456,-234,74],`{lowest: -456, highest: 7893, average: 624,538461538}`],["asdf", `error - wrong data type`],[123,"error - wrong data type"], [[1,4,2,"Asdf",4,2], "error - input must be number(s)-only array"]];

test(testCase, mainClass);