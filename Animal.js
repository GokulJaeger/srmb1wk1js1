class Animal {

    constructor(name,weight){
        this.name = name;
        this.weight = weight;
        if (this.constructor == Animal) {
            throw new Error("Animal class is Abstract class, cannot be created");
        }
    }
    eat(){
        console.log(`${this.name} is eating`);
    }

    sleep(){
        console.log(`${this.name} is sleeping`);
    }

}

class Horse extends Animal {
    constructor(name,weight,height){
        super(name,weight);
        this.height = height;
    }

    run(){
        console.log("Horse is running");
    }
}

class Lion extends Animal{
    constructor(name, weight, height){
        super(name, weight);
        this.height = height;
    }

    roar(){
        console.log("Lion Roars")
    }
}

let hrse = new Horse("Tommy",150,6);
hrse.eat();
hrse.run();

let lins = new Lion();
lins.roar();
lins.sleep();