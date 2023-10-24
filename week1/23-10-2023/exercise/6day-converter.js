//konversi jumlah hari ke format tahun, bulan, hari
//dapatkan input banyaknya hari
//cek apakah kurang dari 1 tahun atau kurang 1 bulan
//untuk tahun input akan dibagi 365, hasil dibulatkan kebawah
//untuk bulan input akan di mod 365 lalu dibagi 30 dan dibulatkan kebawah
//untuk hari akan di mod 30

function mainClass(hari){

    if(typeof(hari)!="number"){
        console.log("input type data salah");
    }else{
        let output;
        const batas = "-----------------------------------------";
        let tahun, bulan, hariTemp;
            if(hari>=365)
            {
                tahun = getYear(hari);
                bulan = getMonth(hari);
                hariTemp = getDay(hari);
                output = `${tahun} ${tahun>1?"years":"year"}, ${bulan} ${bulan>1?"months":"month"}, ${hariTemp} ${hariTemp>1?"days":"day"}`;
            }
            if(hari<365 && hari>30)
            {
                bulan = getMonth(hari);
                hariTemp = getDay(hari);
                output = `${bulan} ${bulan>1?"months":"month"}, ${hariTemp} ${hariTemp>1?"days":"day"}`;
            }
            if(hari<=30)
            {
                hariTemp = getDay(hari);
                output = `${hariTemp} ${hariTemp>1?"days":"day"}`;
            }
            console.log(`${batas}\n6-Day Converter\n${batas}\ninput: ${hari} days\n${batas}\noutput: ${output}\n${batas}`);
    }
}

function getYear(hari){
    return Math.floor(hari/365);
}

function getMonth(hari){
    return Math.floor((hari%365)/30);
}

function getDay(hari){
    return (hari%365)%30;
}

let hari = 400;
let hari2= 366;
let hari3= 360;
let hari4= 245;
let hari5= 23;
let hari6= 1;

console.log("\n\n\ntest1: ")
mainClass(hari);
console.log("\n\n\ntest2: ")
mainClass(hari2);
console.log("\n\n\ntest3: ")
mainClass(hari3);
console.log("\n\n\ntest4: ")
mainClass(hari4);
console.log("\n\n\ntest5: ")
mainClass(hari5);
console.log("\n\n\ntest6: ")
mainClass(hari6);