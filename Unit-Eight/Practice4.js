// practice problem 1:
const headphone = {
    brand: "Sony",
    price: 3000,
    color: "Red"
}
Object.freeze(headphone);
headphone.isBluetooth = false;
console.log(headphone);

// practice problem 2:
const player = {
    name: "Messi",
    goals: 800,
    club: "Inter Miami"
}
Object.freeze(player);
player.country = "Argentina";
console.log(player);

// practice problem 3:
const book = {
    title: "Harry Porter",
    author: "JK Rowling",
    pages: 500
}
Object.seal(book);
book.author = "Chandra Shekhor Mondal";
console.log(book);

// practice problem 4:
const gadget = {
    name: "iPhone",
    price: 120000,
    color: "Black"
}
delete gadget.price;
console.log(gadget);

// practice problem 5:
const animal = {
    name: "Tiger",
    location: "Sundarban"
}
Object.freeze(animal);
animal.location = "Khulna";
console.log(animal);

// practice problem 6:
const food = {
    name: "Pizza",
    price: 500,
    size: "Large"
}
Object.seal(food);
food.location = "Khulna";
food.price = 1000;
console.log(food);