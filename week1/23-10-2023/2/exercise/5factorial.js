//ambil input n
//normalisasi input n (Math.floor(n))
//deklarasi dan assign outputNum = n
//dengan looping dari i=n-1 hingga 1 dikalikan n dengan i
//kembalikan output

function factorial(n){
    let outputNum = n;
    for(let i = n-1;i>0;i--){
        outputNum*=i;
    }
    return outputNum;
}

function mainClass(n){
    let output;
    if(typeof(n)!="number"){
        output = "error - wrong data type";
    }else if(n<0){
        output = "not defined";
    }else if(n===0){
        output = 1;
    }else {
        output = factorial(Math.floor(n));
    }

    const batas = "-----------------------------------------";
    console.log(`${batas}\n5-Factorial\n${batas}\ninput: ${n}\n${batas}\noutput: ${output}\n${batas}`);
}


let n1 = 4;
let n2 = 6;
let n3 = 7;
let n4 = "asdf";
let n5 = 0;
let n6 = -20;

console.log(`\n\n\ntest1: `)
mainClass(n1);
console.log(`expected: 24`);

console.log(`\n\n\ntest2: `)
mainClass(n2);
console.log(`expected: 720`);

console.log(`\n\n\ntest3: `)
mainClass(n3);
console.log(`expected: 5040`);

console.log(`\n\n\ntest4: `)
mainClass(n4);
console.log(`expected: error - wrong data type`);

console.log(`\n\n\ntest5: `)
mainClass(n5);
console.log(`expected: 1`);

console.log(`\n\n\ntest6: `)
mainClass(n6);
console.log(`expected: not defined`);