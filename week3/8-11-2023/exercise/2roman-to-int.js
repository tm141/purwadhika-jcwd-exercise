import { printOut,test, toLowerCaseString } from "./util.js";

function romanToInt(stringIn){
    let output = 0;
    let stringTemp = toLowerCaseString(stringIn);
    for(let i=0;i<stringTemp.length;i++){
        let now = romanValue(stringTemp.charAt(i));
        let next = (i==stringTemp.length-1)?0:romanValue(stringTemp.charAt(i+1));
        if(next>now){
            output+=next-now;
            i++;
        }else{
            output+=now;
        }
    }
    return output;
}

function romanValue(stringIn){
    switch(stringIn[0]){
        case "i":
            return 1;
        case "v":
            return 5;
        case "x":
            return 10;
        case "l":
            return 50;
        case "c":
            return 100;
        case "d":
            return 500;
        case "m":
            return 1000;
        default:
            return 0;
    }
}

function isRomanNumerical(arrIn){
    let arrInTemp = arrIn.toLowerCase();
    for(let i of arrInTemp){
        if(i!="i"&&i!="v"&&i!="x"&&i!="l"&&i!="c"&&i!="d"&&i!="m"){
            return false;
        }
    }
    return true;
}

function mainClass(stringIn){
    let output = "";
    if(typeof(stringIn)!="string"){
        output = "error - wrong data type";
    }else if(!isRomanNumerical(stringIn)){
        output = "error - input must be roman numerical string";
    }else{
        output = romanToInt(stringIn);
    }

    printOut("2-Roman to Integer", stringIn,output);
}

let testCase = [["III",3],["LVIII",58],["MCMXCIV",1994],["IX",9],["XL",40],["MCMIV",1904],["asdf", "error - input must be roman numerical string"],[123,"error - wrong data type"]];

test(testCase,mainClass);