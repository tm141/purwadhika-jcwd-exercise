//hitung keliling kotak
// ambil input panjang dan lebar
// masukan kedalam rumus 2*(p+l)
//return hasil rumus

function por(panjang, lebar){let out = 2*(panjang+lebar);
    return out;
}

function mainClass(panjang, lebar){
    if(!(typeof(panjang)=="number"&&typeof(lebar)=="number")){
        console.log("input type salah")
    }else{
        const batas = "-----------------------------------------"
        console.log(`${batas}\n2-Perimeter of Rectangle\n${batas}\ninput-lebar: ${lebar}\ninput-panjang: ${panjang}\n${batas}\noutput: ${por(panjang,lebar)}\n${batas}`); //memanggil fungsi perimeter of rectangle dengan panjang 5 dan lebar 3    
    };
}

console.log("\n\n\ntest1: ");
let inputPanjang1 = 5;
let inputLebar1 = 3;
mainClass(inputPanjang1, inputLebar1);

console.log("\n\n\ntest2: ");
let inputPanjang2 = 8;
let inputLebar2 = 4;
mainClass(inputPanjang2, inputLebar2);

console.log("\n\n\ntest3: ");
let inputPanjang3 = 24;
let inputLebar3 = 17;
mainClass(inputPanjang3, inputLebar3);

console.log("\n\n\ntest4: ");
let inputPanjang4 = 84;
let inputLebar4 = 53;
mainClass(inputPanjang4, inputLebar4);

console.log("\n\n\ntest5: ");
let inputPanjang5 = 29;
let inputLebar5 = 4;
mainClass(inputPanjang5, inputLebar5);