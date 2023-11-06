function printOut(judul, input, output){
    const batas = "-----------------------------------------";
    console.log(`${batas}\n${judul}\n${batas}\ninput: ${JSON.stringify(input)}\n${batas}\noutput: ${JSON.stringify(output)}\n${batas}`);
}

function printOutTwoInput(judul, input1, input2, output){
    const batas = "-----------------------------------------";
    console.log(`${batas}\n${judul}\n${batas}\ninput: ${JSON.stringify(input1)}, ${JSON.stringify(input2)}\n${batas}\noutput: ${JSON.stringify(output)}\n${batas}`);
}

function test(test, mainClass){
    for(let i=1;i<test.length+1;i++){
        console.log(`\n\n\nTest ${i}: `);
        mainClass(test[i-1][0]);
        console.log(`expected: \n${JSON.stringify(test[i-1][1])}`);
    }
}

function testTwoInput(test, mainClass){
    for(let i=1;i<test.length+1;i++){
        console.log(`\n\n\nTest ${i}: `);
        mainClass(test[i-1][0][0],test[i-1][0][1]);
        console.log(`expected: \n${JSON.stringify(test[i-1][1])}`);
    }
}

//M is typeof checker: string, number, object, etc.
function isArrOfM(n,M){
    let output = true;
    for(let i=0;i<n.length;i++){
        if(typeof(n[i])!=M) output = false;
    }
    return output;
}

//since gaboleh pake built in method
function toLowerCaseString(stringIn){
    let output = "";
    for(let i=0;i<stringIn.length;i++){
        let asciiTemp = (stringIn.charAt(i)).charCodeAt(0);
        if(asciiTemp<92&&asciiTemp>64){
            asciiTemp+=32;
        }
        output+=String.fromCharCode(asciiTemp);
    }
    return output;
}

//since gaboleh pake built in method
function sliceArrayFromN(arrIn, n){
    let output = new Array();
    if(n>=arrIn.length){
        return [];
    }else{
        for(let i=n;i<arrIn.length;i++){
            output.push(arrIn[i]);
        }
    }

    return output;
}


export {printOut, test, testTwoInput, isArrOfM, printOutTwoInput, toLowerCaseString, sliceArrayFromN};