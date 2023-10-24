// mencari diameter, keliling dan luas lingakaran

const pi = Math.PI;

// diameter
// ambil input radius
// masukan rumus 2*radius
// return hasil rumus
function diameterLingkaran(r){
    return 2*r;
}

//keliling lingkaran
//ambil input radius
//masukan rumus 2*pi*r
//return hasil rumus

function kelilingLingkaran(r){
    return 2*pi*r;
}

// luas lingkaran
// ambil input radius
// masukan rumus pi*r^2
// return hasil rumus

function luasLingkaran(r){
    return pi*(r**2);
}


function mainClass(r){
    if(typeof(r)!="number"){
        console.log("input type data salah")
    }else{
        const batas = "-----------------------------------------"
        console.log(`${batas}\n3-Diameter, Circumference and Area of a Circle\n${batas}\ninput radius: ${r}\n${batas}\noutput: diameter = ${diameterLingkaran(r)}, circumference = ${kelilingLingkaran(r)}, area = ${luasLingkaran(r)}\n${batas}`)//memanggil fungsi-fungsi penghitung diameter, keliling dan luas dari lingkaran dengan input radius = 5
    }

}

console.log("\n\n\ntest1: ")
let inputRadius1 = 5;
mainClass(inputRadius1);

console.log("\n\n\ntest2: ")
let inputRadius2 = 7;
mainClass(inputRadius2);

console.log("\n\n\ntest3: ")
let inputRadius3 = 23;
mainClass(inputRadius3);

console.log("\n\n\ntest4: ")
let inputRadius4 = 64;
mainClass(inputRadius4);

console.log("\n\n\ntest5: ")
let inputRadius5 = 13;
mainClass(inputRadius5);


