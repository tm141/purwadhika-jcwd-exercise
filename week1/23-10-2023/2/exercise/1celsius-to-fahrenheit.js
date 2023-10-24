// mendapatkan input celsius
// memasukan ke rumus F=(C*9/5)+32
// kembalikan output

function ctf(celsius){
    return ((celsius*9/5)+32);
}

function mainClass(celsius){
    let output = (typeof(celsius)!="number")? "error - wrong data type" : ctf(celsius);
    const batas = "-----------------------------------------";
    console.log(`${batas}\n1-celsius to Fahrenheit\n${batas}\ninput: ${celsius}\n${batas}\noutput: ${output}\n${batas}`);
}

let celsius1 = 60;
let celsius2 = 21;
let celsius3 = 142;
let celsius4 = "asdfqwer";
let celsius5 = 0;
let celsius6 = -231;

console.log("\n\n\ntest1: ");
mainClass(celsius1);
console.log(`expected: 140`);

console.log("\n\n\ntest2: ");
mainClass(celsius2);
console.log(`expected: 69.8`);

console.log("\n\n\ntest3: ");
mainClass(celsius3);
console.log(`expected: 287.6`);

console.log("\n\n\ntest4: ");
mainClass(celsius4);
console.log(`expected: error - wrong data type`);

console.log("\n\n\ntest5: ");
mainClass(celsius5);
console.log(`expected: 32`);

console.log("\n\n\ntest6: ");
mainClass(celsius6);
console.log(`expected: -383.8`);