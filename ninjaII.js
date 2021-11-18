function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function(){
        console.log("My ninja name is " + this.name);
        return this;
    }

    this.showStats = function() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed : ${speed}, Strength : ${strength}`);
        return this;
    }

    this.drinkSake = function () {
        this.health += 10;
        return this;
    }

    this.punch = function(otherNinja){
        // check if opponent is Ninja
        if ( otherNinja instanceof Ninja == true){
            otherNinja.health -=5;
        console.log(`${otherNinja.name} was punched by ${this.name} and decrease 5 Health to ${otherNinja.name}!`);
        return this;
        }else{
            console.log("The other person isn't ninja, you shouldn't fight back him/her");
        }
    }
    this.kick = function(otherNinja){
        // check if opponent is Ninja
        if (otherNinja instanceof Ninja == true){
            otherNinja.health -= 15;
            console.log(`${otherNinja.name} was kicked by ${this.name} and decrease 15 health to ${otherNinja.name}!`);
            return this;
        }else{
            console.log("The other person isn't ninja, you shouldn't fight back him/her");
        }
    }
}

//Testing Ninja Class 
/*
var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
*/

//Testing Ninja Class with kick and punch methods
let jackyChan = new Ninja("Jacky Chan");
let bruceLee = new Ninja("Bruce Lee");
let person = ("Elon Musk");

jackyChan.sayName();
bruceLee.sayName();

jackyChan.punch(bruceLee);
bruceLee.kick(jackyChan);
bruceLee.kick(person);

jackyChan.showStats();
bruceLee.showStats();