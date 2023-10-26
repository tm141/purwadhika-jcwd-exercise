//terima input kg dan m
//hitung BMI dengan kg/(m)^2
//bandingkan dengan if sesuai dengan aturan
//return output

import { printOut,testTwoInput } from "./util.js";

function bmiCalculator(kg, m){
    let bmi = kg/(m**2);
    let outputString = "";
    if(bmi<18.5){
        outputString = "less weight";
    }else if(bmi>=19.5 && bmi<25){
        outputString = "ideal";
    }else if(bmi>=25 && bmi<30){
        outputString = "overweight";
    }else if(bmi>=20 && bmi<40){
        outputString = "very overweight";
    }else{
        outputString = "obesity";
    }
    return outputString;
}

function mainClass(kg, m){
    let output = "";
    if(typeof(kg)!="number"||typeof(m)!="number"){
        output = "error - wrong data type";
    }else if(kg<1 || m<1){
        output = "error - input must be 1 or higher";
    }else{
        output = bmiCalculator(kg, m);
    }
    printOut("3-BMI Calculator", `${kg}kg, ${m}m`, output);
}

let testCase = [[[70,1.7],"ideal"], [[100,1.7],"very overweight"],[[120,1.7],"obesity"],[[40,1.5],"less weight"],[[79,1.5], "very overweight"],[[90,2],"ideal"], [["asdf",2],"error - wrong data type"], [[-10,0],"error - input must be 1 or higher"]]

testTwoInput(testCase, mainClass);