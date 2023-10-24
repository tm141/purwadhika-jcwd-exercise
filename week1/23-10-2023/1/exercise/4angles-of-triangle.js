// menerima input 2 sudut a dan b
// masukan ke rumus 180-a-b
// kembalikan hasil perhitungan

function aot(sudutA, sudutB){
    return 180-sudutA-sudutB;
}

function mainClass(sudutA,sudutB){
    if(!(typeof(sudutA)=="number" && typeof(sudutB)=="number")){
        console.log("tipe data input salah");
    }else{
        const batas = "-----------------------------------------";
        console.log(`${batas}\n4-Angles of Triangle\n${batas}\ninput-sudutA: ${sudutA}\ninput-sudutB: ${sudutB}\n${batas}\noutput: ${aot(sudutA,sudutB)}\n${batas}`);
    }

}

console.log("\n\n\ntest1: ")
let sudut1 = 80;
let sudut2 = 65;
mainClass(sudut1,sudut2);

console.log("\n\n\ntest2: ")
let sudut3 = 32;
let sudut4 = 64;
mainClass(sudut3,sudut4);

console.log("\n\n\ntest3: ")
let sudut5 = 71;
let sudut6 = 23;
mainClass(sudut5,sudut6);

console.log("\n\n\ntest4: ")
let sudut7 = 47;
let sudut8 = 56;
mainClass(sudut7,sudut8);