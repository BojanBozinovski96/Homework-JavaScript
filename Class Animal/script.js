class Animal {
  constructor(name, type, age, size) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.size = size;
    this.isEaten = false;
  }

  eat(food) {
    if (food instanceof Animal) {
      if (this.type === "herbivore") {
        console.log(
          `The animal ${this.name} is a herbivore and does not eat other animals`
        );
      } else if (this.size >= food.size * 2) {
        console.log(
          `The animal ${this.name} tried to eat the ${food.name} but it was too large.`
        );
      } else {
        food.isEaten = true;
        console.log(`The animal ${this.name} ate the ${food.name}.`);
      }
    } else {
      console.log(`The animal ${this.name} is eating ${food}.`);
    }
  }
}

class Dog extends Animal {
    constructor(name, type, age, size, breed){
        super(name, type, age, size);
        this.breed = breed;
    }

    bark(){
        console.log(`The ${this.breed} dog ${this.name} is barking!`);
    }

    fetch(item){
        console.log(`The ${this.breed} dog ${this.name} is fetching ${item}!`)
    }
}

const myDog = new Dog('Kora', 'omnivore', 11, 50 , 'Canecorso');

myDog.bark();
myDog.fetch('Ball');
myDog.eat('steak');

class Elephant extends Animal{
    constructor(name, type, age, size, tuskLength){
        super(name, type, age, size);
        this.tuskLength = tuskLength;
    }

    trumpet(){
        console.log(`The elephant ${this.name} is trumpeting!`);
    }


    sprayWater() {
        console.log(`The elephant ${this.name} is spraying water with its trunk!`);
    }
}

let myElephant = new Elephant('Dumbo', 'herbivore', 5, 1500, 80);

myElephant.trumpet();
myElephant.sprayWater();
myElephant.eat(myDog);

class Tiger extends Animal {
    constructor(name,type, age, size, stripeCount){
        super(name, type, age, size);
        this.stripeCount = stripeCount;
    }

    roar(){
        console.log(`The tiger ${this.name} is roarinng!`);
    }

    hunt(animal){
        this.eat(animal);
        console.log(`The tiger ${this.name} is hunting ${animal.name}!`);
    }
}


let myTiger = new Tiger('Shere Khan', 'carnivore', 7, 300, 100);

myTiger.roar();
myTiger.hunt(myElephant);