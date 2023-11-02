export class Player{
    #name;
    #health;
    #power;

    constructor(name,health=100,power=10){
        this.#name=name;
        this.#health=health;
        this.#power=power;
    }

    getName(){
        return this.#name;
    }

    getHealth(){
        return this.#health;
    }

    getPower(){
        return this.#power;
    }

    setName(name){
        this.#name=name;
    }

    setHealth(health){
        this.#health=health;
    }

    setPower(power){
        this.#power=power;
    }

    hit(power){
        this.#health-=power;
    }

    useItem(item){
        if(item[0]=="health"){
            this.#health+=item[1];
        }else if(item[0]=="power"){
            this.#power+=item[1];
        }
    }

    showStatus(){
        return `${this.#name}(Health=>${this.#health}, Power=>${this.#power})`;
    }
}