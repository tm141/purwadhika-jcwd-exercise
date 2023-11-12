import { Queue } from "./queue.js";
import { Handle } from "./handle.js";

function mainClass(input){
    if(!Array.isArray(input)){
        console.log("error - wrong data type");
    }else{
        let queue = new Queue(input);
        let handle = new Handle(queue);
        let output = handle.run();
        // output.then(
        //     (result) =>{
        //         console.log(result);
        //     }
        // )
    }
}

let testCase = ["sushi","burger","hotdog"];

mainClass(testCase)
