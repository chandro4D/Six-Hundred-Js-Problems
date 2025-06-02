// practice problem 1:
const product = {
    name:"Laptop",
    price:50000,
    brand:"Dell"
}
const {brand} = product;
console.log(brand);

// practice problem 2:
const item = {
    Name: "Mobile",
    Price: 20000,
    Phone: "Sumsung"
}
const {Phone,Price}=item;
console.log("Phone:", Phone,",","Price:",Price);

// practice problem 3:
const colors = ["red","blue","green","yellow"];
const [first, second] = colors;
console.log(first,second);

// practice problem 4:
const threeNum = [11,68,22];
const [,seconD] = threeNum;
const Second = seconD;
console.log(Second);

// practice problem 5:
const digits = [2,4,6,8];
const [two,,,eight] = digits;
const Two = two;
const Eight = eight;
console.log(Two,Eight);

// practice problem 6:
function multiply([a,b]) {
    return [a*3 ,b*3];
}
const arr = [2,3];
const [First,SeconD]= multiply(arr);

console.log(First,SeconD);

// practice problem 7:
const person = {
    NamE:"Rahim",
    city: "Dhaka"
}
const {NamE , city , phone = "N/a"} = person;
console.log(NamE,city,phone);

// practice problem 8:
const teacher = {
    NAME: "Maria",
    profession: "Teacher"
}
const {NAME,profession:job} = teacher;
console.log(NAME,job);
