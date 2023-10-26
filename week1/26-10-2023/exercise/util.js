function printOut(judul, input, output){
    const batas = "-----------------------------------------";
    console.log(`${batas}\n${judul}\n${batas}\ninput: ${input}\n${batas}\noutput: ${output}\n${batas}`);
}

function test(test, mainClass){
    for(let i=1;i<test.length+1;i++){
        console.log(`\n\n\nTest ${i}: `);
        mainClass(test[i-1][0]);
        console.log(`expected: \n${test[i-1][1]}`);
    }
}

function testTwoInput(test, mainClass){
    for(let i=1;i<test.length+1;i++){
        console.log(`\n\n\nTest ${i}: `);
        mainClass(test[i-1][0][0],test[i-1][0][1]);
        console.log(`expected: \n${test[i-1][1]}`);
    }
}

export {printOut, test, testTwoInput};