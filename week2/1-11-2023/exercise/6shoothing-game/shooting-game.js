import { Player } from "./Player.js";

export class shootingGame{
    #player1;
    #player2;
    constructor(player1 = new Player("PlayerA"),player2 = new Player("PlayerB")){
        this.#player1 = player1;
        this.#player2 = player2;
    }

    getRandomItem(){
        let type = (Math.floor(Math.random()*2))?"health":"power";
        let value = (Math.floor(Math.random()*2))?0:10;
        return [type,value];
    }

    isDead(player){
        if(player.getHealth()<1){
            return true;
        }else{
            return false;
        }
    }

    start(){
        const batas = "-----------------------------------------";
        const judul = `Player 1: ${this.#player1.getName()}\nPlayer 2: ${this.#player2.getName()}\n\nGame Start!`
        console.log(`${batas}\n${judul}\n${batas}\n`);
        let firstMove = Math.floor(Math.random()*2);
        let firstPlayer,secondPlayer;
        if(firstMove){
            firstPlayer=this.#player1;
            secondPlayer = this.#player2;
        }else{
            firstPlayer= this.#player2;
            secondPlayer = this.#player1;
        }
        console.log(`RnG for first move: Player ${firstPlayer.getName()}\n${batas}\n${batas}`);
        let counter = 1;
        while(!this.isDead(firstPlayer)&&!this.isDead(secondPlayer)){
            console.log(`Round ${counter++}:\n${batas}`);
            console.log(`Status:\n\nFirst Player: ${firstPlayer.showStatus()}\nSecond Player: ${secondPlayer.showStatus()}\n\n${batas}`);
            let randomFirst = this.getRandomItem();
            let randomSecond = this.getRandomItem();
            firstPlayer.useItem(randomFirst);
            secondPlayer.useItem(randomSecond);
            console.log(`Item:\n\nFirstPlayer: ${randomFirst}\nNew Status: ${firstPlayer.showStatus()}\n\nSecondPlayer: ${randomSecond}\nNew Status: ${secondPlayer.showStatus()}\n\n${batas}`);
            secondPlayer.hit(firstPlayer.getPower());
            console.log(`Status after hit:\n\nSecond Player: ${secondPlayer.showStatus()}\n\n${batas}`);
            if(this.isDead(secondPlayer)){break;}
            firstPlayer.hit(secondPlayer.getPower());
            console.log(`Status after hit:\n\nFirst Player: ${firstPlayer.showStatus()}\n\n${batas}`);
        }
        console.log(batas);
        let output = "";
        if(this.isDead(firstPlayer)){
            if(this.isDead(secondPlayer)){
                output = `The game is Tie! both player ${firstPlayer.getName()} and player ${this.secondPlayer.getName()} is dead!`;
            }else{
                output = `${secondPlayer.getName()} Won!`;
            }
        }else if(this.isDead(secondPlayer)){
            output = `${firstPlayer.getName()} Won!`;
        }

        console.log(output);
    }
}