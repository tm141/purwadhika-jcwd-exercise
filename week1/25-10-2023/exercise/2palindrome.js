//menerima input n
//deklarasi variable cek=""
//loop i=n.length;i>=0;i++
//iterasi: cek+=charAt(i)
//selesai iterasi bandingkan n dengan cek
//jika true maka palindrome, jika false maka not palindrome
import { printOut, test } from "./util.js";


function palindrome(n){
    let cek = "";
    for(let i=n.length;i>=0;i--){
        cek+=n.charAt(i);
    }
    return n==cek?"palindrome":"not palindrome"
}

function mainClass(n){
    let output = "";
    if(typeof(n)!="string"){
        output = "error - wrong data type";
    }else { 
        output = palindrome(n);
    }
    printOut("2-Palindrome", n, output);
}

// n1 = madam
// n2 = mobil
// n3 = racecar
// n4 = 123

let testCase = [["madam", "palindrome"], ["mobil", "not palindrome"], ["racecar", "palindrome"], [123,"error - wrong data type"]];

test(testCase,mainClass);