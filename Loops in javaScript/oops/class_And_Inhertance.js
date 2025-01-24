class earth{
    constructor(race, power){
        this.race = race;
        this.power = power;

    }

    whoIsStrong(){
        return `${this.race} have the power of ${this.power}`
    }
}

let Race = new earth("Goddes", "Light")
let Demon = new earth("Demon", "Darkness")

// console.log(Race.whoIsStrong());
// console.log(Demon.whoIsStrong());

class Human extends earth{
    Power(){
        return `The Human Have the power of the ${this.race} which can use ${this.power}`
    }

}

let myPower = new Human("Goddes", "Thander");
console.log(myPower.Power());

