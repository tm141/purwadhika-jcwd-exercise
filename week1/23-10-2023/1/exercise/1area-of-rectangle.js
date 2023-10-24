//hitung luas kotak
// dapatkan input panjang dan lebar
// panjang dikalikan dengan lebar
// return hasil kali
function aor(panjang,lebar){
    return panjang*lebar;
}

function mainClass(panjang, lebar){
    if(!(typeof(panjang)=="number"&&typeof(lebar)=="number")){
        console.log("input type salah");
    }else{
        const batas = "-----------------------------------------"
        console.log(`${batas}\n1-Area of Rectangle\n${batas}\ninput-lebar: ${lebar}\ninput-panjang: ${panjang}\n${batas}\noutput: ${aor(panjang,lebar)}\n${batas}`); //memanggil fungsi area of rectangle dengan input lebar 3 dan panjang 5
    }
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


