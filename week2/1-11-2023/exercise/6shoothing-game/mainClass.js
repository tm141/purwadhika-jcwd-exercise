import { shootingGame } from "./shooting-game.js";

class mainClass{
    sg;
    constructor(){
        this.sg = new shootingGame();
    }

    test(){
        this.sg.start();  
    }
}

let mc = new mainClass();

mc.test();