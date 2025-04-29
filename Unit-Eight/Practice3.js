// practice problem 1:
const book = {
    bookName: "Marhaba JavaScripte Maro Thaba",
    authorName: "Jhankar Mahbub",
    price: 638
}
console.log(Object.keys(book), Object.values(book));

// practice problem 2:
const article = {
    title: "Learning Js",
    category: "Programming"
}
console.log(Object.keys(article).includes("author"));

// practice problem 3:
const laptop = {
    brand: "Dell",
    model: "Inspiron",
    price: 45000
}
for(const key in laptop){
    const value = laptop[key];
    console.log(key,value);
}


// practice problem 4:
const phone = {
    brand: "Samsung",
    model: "Galaxy s21",
    price: 85000
}
const keys = Object.keys(phone);
for(const key of keys){
    console.log(key,phone[key]);
}

// practice problem 5:
const bike = {
    brand: "Hero",
    price: 120000,
    model: "Splendor"
}
console.log(Object.values(bike));

// practice problem 6:
const books = {
    book1: "Harry Potter",
    book2: "The Hobbit",
    book3: "Game of Thrones"
}
for(const book in books){
    console.log(books[book]);
}

// practice problem 7:
const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}
let sum = 0;
for(let num in numbers){
    sum = sum + numbers[num];
}
console.log(sum);

// practice problem 8:
const player = {
    name: "Messi",
    team: "Argentina",
    goals: 91
}
console.log(Object.values(player));

// practice problem 9:
const building = {
    floors: 10,
    address:{
        street:"Main Road",
        city: "Dhaka"
    },
    type: "Commercial"

}
for(const bu in building){
    const value = building[bu];
    console.log(bu,value);
}