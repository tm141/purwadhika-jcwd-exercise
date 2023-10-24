//menerima input n
//melakukan pengulangan dari 1 hingga n/2
//mod di setiap pengulangan jika hingga n/2 ada yang tidak nol maka angka not prime
//jika semua nol maka angka prime
//return hasil

function pon(angka){
    let output = true;
    if(angka<=1){
        output = false;
    }
    else{
        for(let i = 2;i<=angka/2;i++){
            if(angka%i==0) output=false;
        }
    }
    return output ? "Prime Number" : "Not a Prime Number";
}

function mainClass(angka){
    let output = (typeof(angka)!="number") ? "error - wrong data type": pon(angka);
    const batas = "-----------------------------------------";
    console.log(`${batas}\n3-Prime or Not\n${batas}\ninput: ${angka}\n${batas}\noutput: ${output}\n${batas}`);
}

let angka1 = 7;
let angka2 = 6;
let angka3 = 374;
let angka4 = "asdfasdf";
let angka5 = -32;
let angka6 = 89;

console.log(`\n\n\ntest1: `);
mainClass(angka1);
console.log(`expected: Prime Number`);

console.log(`\n\n\ntest2: `);
mainClass(angka2);
console.log(`expected: Not a Prime Number`);

console.log(`\n\n\ntest3: `);
mainClass(angka3);
console.log(`expected: Not a Prime Number`);

console.log(`\n\n\ntest4: `);
mainClass(angka4);
console.log(`expected: error - wrong data type`);

console.log(`\n\n\ntest5: `);
mainClass(angka5);
console.log(`expected: Not a Prime Number`);

console.log(`\n\n\ntest6: `);
mainClass(angka6);
console.log(`expected: Prime Number`);