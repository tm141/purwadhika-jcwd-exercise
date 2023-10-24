//mengambil input n
//deklarasi dan assign value output=0
//dengan loop mulai dari i=1 hingga n lakukan output+=i
//kembalikan hasil
function son(n){
    let output = 0;
    for(let i = 1;i<=n;i++){
        output+=i;
    }
    return output;
}

function mainClass(n){
    let output;
    if(typeof(n)!="number"){
        output = "error - wrong data type";
    }else if(n<=0){
        output = "error - wrong data input, the valid input is int of 1 or more"
    }else{
        output = son(n);
    }
    const batas = "-----------------------------------------";
    console.log(`${batas}\n4-Sum of Numbers\n${batas}\ninput: ${n}\n${batas}\noutput: ${output}\n${batas}`);
}

let n1 = 5;
let n2 = 3;
let n3 = 42;
let n4 = "asdf";
let n5 = 0;
let n6 = -5;

console.log(`\n\n\ntest1: `);
mainClass(n1);
console.log(`expected: 15`);

console.log(`\n\n\ntest2: `);
mainClass(n2);
console.log(`expected: 6`);

console.log(`\n\n\ntest3: `);
mainClass(n3);
console.log(`expected: 903`);

console.log(`\n\n\ntest4: `);
mainClass(n4);
console.log(`expected: error - wrong data type`);

console.log(`\n\n\ntest5: `);
mainClass(n5);
console.log(`expected: error - wrong data input, the valid input is int of 1 or more`);

console.log(`\n\n\ntest6: `);
mainClass(n6);
console.log(`expected: error - wrong data input, the valid input is int of 1 or more`);