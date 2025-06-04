// practice problem 1:
const technologies= ["condition","array","loop"];
const newArray = ["variable","Object", ...technologies];
console.log(newArray);

// practice problem 2:
const fruits = [ "Apple", "Banana", "Mango"];
const myFruits = [ ...fruits, "Papaya","Orange"];
console.log(myFruits);

// practice problem 3:
const frontEnd = ["JavaScript"];
const backEnd = ["Node.Js"];
const dataBase = ["MongoDB"];
const fullStackDev = [...frontEnd,...backEnd,...dataBase];
console.log(fullStackDev);

// practice problem 4:
const website = {
    name: "MySite",
    type: "e-commerce",
    status: "Active"
}
const newWeb = {...website,theme: "Dark"};
console.log(newWeb);

// practice problem 5:
const young = {
    Name: "Arif",
    age: 30,
    country: "B Baria"
}
const {country, ...details} = young;
const Young = {...details};
console.log(Young);


// practice problem 6:
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
}
const Car = {...car};
const newCar = {...Car , year: 2032};
console.log(newCar);