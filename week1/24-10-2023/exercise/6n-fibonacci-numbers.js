//mengambil input n
//cek jika n = 0 maka return 0
//cek jika n adalah 1 atau 2 maka return 1
//cek jika n kurang dari 0 maka return error input
//deklarasi dan assign now = 2, last = 1
//lakukan looping dari i=3 hingga n
//lakukan iterasi: save now ke nowTemp, tambahkan temp dengan last, assign last dengan nowTemp
//keluar loop, return output

function nfn(n){
    let now = 2;
    let last = 1;
    for (let i=3;i<n;i++){
        let nowTemp = now;
        now+=last;
        last = nowTemp;
    }
    return now;
}

function mainClass(n){
    if(typeof(n)!="number"){
        output = "error - wrong data type";
    }
    else if(n==0){
        output = 0;
    }else if(n==1 || n==2){
        output = 1;
    }else if(n<0){
        output = "error - input can't be negative";
    }else{
        output = nfn(n);
    }

    const batas = "-----------------------------------------";
    console.log(`${batas}\n6-First N Fibonacci Numbers\n${batas}\ninput: ${n}\n${batas}\noutput: ${output}\n${batas}`);
}

let n1 = 15;
let n2 = 17;
let n3 = -12;
let n4 = 0;
let n5 = 1;
let n6 = 2;
let n7 = 3;
let n8 = "asdf";

console.log(`\nFirst few fibonacci numbers(starts from 0): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181`)

console.log(`\n\n\ntest1: `);
mainClass(n1);
console.log("expected: 610");

console.log(`\n\n\ntest2: `);
mainClass(n2);
console.log("expected: 1597");

console.log(`\n\n\ntest3: `);
mainClass(n3);
console.log("expected: error - input can't be negative");

console.log(`\n\n\ntest4: `);
mainClass(n4);
console.log("expected: 0");

console.log(`\n\n\ntest5: `);
mainClass(n5);
console.log("expected: 1");

console.log(`\n\n\ntest6: `);
mainClass(n6);
console.log("expected: 1");

console.log(`\n\n\ntest7: `);
mainClass(n7);
console.log("expected: 2");

console.log(`\n\n\ntest8: `);
mainClass(n8);
console.log("expected: error - wrong data type");