// practice problem 1:
/*
    Inheritance in js is a feature that allows one class (Child class) to use properties
    and methods of another class(Parent Class). We need inheritance to follow the DRY 
    (Don't Repeat Yourself) principle and make code easier to manage and scale.
*/

// practice problem 2:
/*
    In JavaScript, use the `extends` keyword to make a child class inherit 
    from a parent class, and use `super()` inside the child constructor to 
    call the parent's constructor.

*/

// practice problem 3 :

class Vehicle {
    constructor(brand, model, color, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

class Bus extends Vehicle {
    constructor(brand, model, color, year, seatCapacity) {
        super(brand, model, color, year);
        this.seatCapacity = seatCapacity;
    }
}

class Truck extends Vehicle {
    constructor(brand, model, color, year, loadCapacity) {
        super(brand, model, color, year);
        this.loadCapacity = loadCapacity;
    }
}
class Bike extends Vehicle {
    constructor(brand, model, color, year, type) {
        super(brand, model, color, year);
        this.type = type;
    }
}


const bus = new Bus("Volvo", "7900", "White", 2020, 50);
const truck = new Truck("Tata", "LPT 2518", "Blue", 2018, "Flatbed");
const bike = new Bike("Yamaha", "R15", "Black", 2022, "Sport");
console.log(bus);
console.log(truck);
console.log(bike);

// practice problem 4 :
class CommonParent {
    constructor(name, species, color, age, habitat) {
        this.name = name;
        this.species = species;
        this.color = color;
        this.age = age;
        this.habitat = habitat;
    }
}
class Animal extends CommonParent {
    constructor(name, species, color, age, habitat, isDomestic) {
        super(name, species, color, age, habitat);
        this.isDomestic = isDomestic;
    }
}
class Bird extends CommonParent {
    constructor(name, species, color, age, habitat, canFly) {
        super(name, species, color, age, habitat);
        this.canFly = canFly;
    }
}
class Fish extends CommonParent {
    constructor(name, species, color, age, habitat, waterType) {
        super(name, species, color, age, habitat);
        this.waterType = waterType;
    }
}
const cat = new Animal("Tom", "Cat", "Gray", 3, "Home", true);
const parrot = new Bird("Polly", "Parrot", "Green", 2, "Forest", true);
const goldfish = new Fish("Goldie", "Goldfish", "Golden", 1, "Aquarium", "Freshwater");

console.log(cat);
console.log(parrot);
console.log(goldfish);


// practice problem 5 :
class Furniture {
    constructor(name, material, color, price, weight) {
        this.name = name;
        this.material = material;
        this.color = color;
        this.price = price;
        this.weight = weight;
    }
}
class Chair extends Furniture {
    constructor(name, material, color, price, weight, hasArmrest) {
        super(name, material, color, price, weight);
        this.hasArmrest = hasArmrest;
    }
}
class Table extends Furniture {
    constructor(name, material, color, price, weight, shape) {
        super(name, material, color, price, weight);
        this.shape = shape;
    }
}
const officeChair = new Chair("Office Chair", "Leather", "Black", 12000, 7, true);
const diningTable = new Table("Dining Table", "Wood", "Brown", 20000, 20, "Rectangle");

console.log(officeChair);
console.log(diningTable);


// practice problem 6 :
class Animal1 {
    constructor(name, species, color, age, habitat) {
        this.name = name;
        this.species = species;
        this.color = color;
        this.age = age;
        this.habitat = habitat;
    }
}
class Dog extends Animal1 {
    constructor(name, species, color, age, habitat, breed) {
        super(name, species, color, age, habitat);
        this.breed = breed;
    }
}
class Cat extends Animal1 {
    constructor(name, species, color, age, habitat, isIndoor) {
        super(name, species, color, age, habitat);
        this.isIndoor = isIndoor;
    }
}
class Parrot extends Animal1 {
    constructor(name, species, color, age, habitat, canTalk) {
        super(name, species, color, age, habitat);
        this.canTalk = canTalk;
    }
}
const myDog = new Dog("Bruno", "Dog", "Brown", 3, "Home", "Labrador");
const myCat = new Cat("Kitty", "Cat", "White", 2, "Apartment", true);
const myParrot = new Parrot("Mitu", "Parrot", "Green", 1, "Cage", true);

console.log(myDog);
console.log(myCat);
console.log(myParrot);

// practice problem 7 :
/*
     The DRY principle means avoiding code duplication. Instead of writing the same logic
     in multiple places, write it once and reuse it.

     function getAreaOfCircle1(radius) {
return 3.14 * radius * radius;
}

function getAreaOfCircle2(radius) {
return 3.14 * radius * radius; // Repeated logic ❌
}
function getCircleArea(radius) {
  return 3.14 * radius * radius;
}

console.log(getCircleArea(5));
console.log(getCircleArea(10)); // Logic reused ✅

*/
// practice problem 8 :

// practice problem 9 :
