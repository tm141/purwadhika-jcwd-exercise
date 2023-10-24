//menerima input sebuah angka
//mod angka tersebut dengan angka 2
//jika hasil 0 maka dia genap jika 1 maka dia ganjil
//kembalikan hasil

function ooe(angka){
    return ((angka%2)==0)?"Even Number":"Odd Number";
}

function mainClass(angka){
    let output = (typeof(angka)!="number")? "error - wrong data type" : ooe(angka);
    const batas = "-----------------------------------------";
    console.log(`${batas}\n2-Odd or Even\n${batas}\ninput: ${angka}\n${batas}\noutput: ${output}\n${batas}`);
}

angka1 = 25;
angka2 = 2;
angka3 = -77;
angka4 = 23156;
angka5 = "asdfqwe";
angka6 = 0;

console.log(`\n\n\ntest 1: `);
mainClass(angka1);
console.log(`expected: Odd Number`);

console.log(`\n\n\ntest 2: `);
mainClass(angka2);
console.log(`expected: Even Number`);

console.log(`\n\n\ntest 3: `);
mainClass(angka3);
console.log(`expected: Odd Number`);

console.log(`\n\n\ntest 4: `);
mainClass(angka4);
console.log(`expected: Even Number`);

console.log(`\n\n\ntest 5: `);
mainClass(angka5);
console.log(`expected: error - wrong data type`);

console.log(`\n\n\ntest 6: `);
mainClass(angka6);
console.log(`expected: Even Number`);