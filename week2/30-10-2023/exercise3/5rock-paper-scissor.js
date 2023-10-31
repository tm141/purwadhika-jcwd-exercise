//terima input string "rock" / "paper" / "scissor"
//generate angka random 0-2
// 0:rock;1:paper;2:scissor
//gunakan logic perbandingan rock-scissor=rock, rock-paper=paper, rock-rock=tie, paper-scissor=scissor, paper-paper=tie, scissor-scissor=tie
//return pemenang

import { printOut,test } from "./util.js";

function rockPaperScissor(n){
    let enemy = Math.floor(Math.random()*3);
    let input = RPStoNum(n);
    let output = `bot chose: ${numToRPS(enemy)}, you ${play(input,enemy)}!`;
    return output;
}

function play(n,n1){
    if(n===n1){
        return "tie";
    }else if(n==0){
        if(n1==1){
            return "lose";
        }
        if(n1==2){
            return "win";
        }
    }else if(n==1){
        if(n1==0){
            return "win";
        }
        if(n1==2){
            return "lose";
        }
    }else if(n==2){
        if(n1==0){
            return "lose";
        }
        if(n1==1){
            return "win";
        }
    }
}

function numToRPS(n){
    switch(n){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissor";
            break;
        default:
            break;
    }
}

function RPStoNum(n){
    switch(n){
        case "rock":
            return 0;
            break;
        case "paper":
            return 1;
            break;
        case "scissor":
            return 2;
            break;
    }
}

function mainClass(n){
    let output = "";
    if(typeof(n)!="string"){
        output = "error - wrong data type";
    }else if(n!="rock"&&n!="paper"&&n!="scissor"){
        output = `error - input must be "rock" "paper" or "scissor"`;
    }else{
        output = rockPaperScissor(n);
    }
    printOut("5-Rock Paper Scissor", n, output);
}

let testCase = [["rock","win/lose"],["rock","win/lose"],["rock","win/lose"],["rock","win/lose"],["rock","win/lose"],["paper","win/lose"],["paper","win/lose"],["paper","win/lose"],["paper","win/lose"],["paper","win/lose"],["scissor","win/lose"],["scissor","win/lose"],["scissor","win/lose"],["scissor","win/lose"],["scissor","win/lose"],["asdf", 'error - input must be "rock" "paper" or "scissor"'],[123, "error - wrong data type"]];

test(testCase,mainClass);