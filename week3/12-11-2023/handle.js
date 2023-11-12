import { Queue } from "./queue.js"

export class Handle{
    #queue
    constructor(queue){
        this.#queue = queue;
    }

    getQueue(){
        return this.#queue;
    }

    setQueue(queue){
        this.#queue=queue;
    }

    async run(){
        let tempQueue = [...this.#queue.getOrders()];
        if(Array.isArray(tempQueue)&&tempQueue.length>0){
            while(tempQueue.length>0){
                let tempTime = (Math.round(Math.random()*10000))+1
                let tempVal = tempQueue[0];
                let promise = await new Promise(function(resolve){
                        tempQueue = tempQueue.slice(1);
                        setTimeout(resolve,tempTime);
                    }
                ).then(function(){
                        console.log(`Queue ${tempVal}, Done in ${tempTime} ms`);
                    }
                );
            }
        }
        
    }
}