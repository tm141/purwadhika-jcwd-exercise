import { printOut,test } from "./util.js";

function stairsStep(candidates, target) {
    let res = []
    recurse(0,[],candidates,target,res);
    return [[...res],res.length];
}

function recurse(sum,temp, candidates, target, res){
    if(sum>target) return;
    if(sum == target){
        res.push([...temp])
        return;
    }
    for(let i =0; i<candidates.length;i++){
        if(candidates[i]>target)continue
        recurse(sum+candidates[i],[...temp,candidates[i]],candidates,target,res);
    }
}

function mainClass(target){
    let output = "";
    if(typeof(target)!="number"){
        output = "error - wrong data type";
    }else{
        output = stairsStep([1,2],target);
    }

    printOut("4-Stairs Step", target,output);
}

let testCase = [[2,"[[[1,1],[2]],2]"],[3,`[[[1,1,1],[1,2],[2,1]],3]`],[5,`[[[1,1,1,1,1],[1,1,1,2],[1,1,2,1],[1,2,1,1],[1,2,2],[2,1,1,1],[2,1,2],[2,2,1]],8]`],["asdf", "error - wrong data type"]];

console.log("\n\npembacaan output: [[kombinasi step yang dapat diambil], jumlah step]");
test(testCase,mainClass);