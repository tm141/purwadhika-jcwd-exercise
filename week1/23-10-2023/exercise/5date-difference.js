// menghitung selisih hari antara 2 date
// mendapatkan input 2 date
// kurangi date1 dan date2 lalu gunakan fungsi absolute(Math.abs()) untuk menjadikan positif
// kembalian dalam milisecond konversi ke hari
// kembalikan hasil perhitungan

function dateDifference(date1, date2){
    let dateA = new Date(date1);
    let dateB = new Date(date2);
    let dateC = Math.abs(dateA.getTime()-dateB.getTime());
    let output = msToDay(dateC);
    return output;
}

function msToDay(input){
    return input/(1000*3600*24);
}

function mainClass(date1, date2){
    const batas = "-----------------------------------------";
    console.log(`${batas}\n5-Date Difference\n${batas}\ninput-date1: ${date1}\ninput-date2: ${date2}\n${batas}\noutput: ${dateDifference(date1,date2)}\n${batas}`);
}

console.log("\n\n\ntest1: ");
let date1 = "2022-01-20";
let date2 = "2022-01-22";
mainClass(date1,date2);

console.log("\n\n\ntest2: ");
let date3 = "2023-01-20";
let date4 = "2022-01-22";
mainClass(date3,date4);

console.log("\n\n\ntest3: ");
let date5 = "1998-02-13";
let date6 = "2022-01-22";
mainClass(date5,date6);

console.log("\n\n\ntest4: ");
let date7 = "2022-01-20";
let date8 = "2007-06-23";
mainClass(date7,date8);
