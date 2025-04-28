// practice problem 1:
const player = {
    name:"Mahmudulla",
    age:35,
    sports: "Cricket",
    team: "Bangladesh"
}
console.log(player.team);

// practice problem 2:
const laptop = {
    brand: "ASUS",
    price: 83000,
    hardDisk: "512 SSD",
    ram:"8 GB",
    screenSize : "16 Inch"
}
console.log(laptop.screenSize);

// practice problem 3:
const favPlace = {
    name: "Cox's Bazar",
    distance: "400 Km",
    popularity: "High",
}
console.log(favPlace["popularity"]);

// practice problem 4:
const phone = {
    brand : "Nokia",
    color : "Black",
    price : 5000
}
console.log(phone["price"]);

// practice problem 5:
const library = {
    name : "Public Library",
    location : "Dhaka",
    books : 5000
}
console.log(library["location"]);

// practice problem 6:
const movie = {
    title: "Inception",
    director: "Nolan",
    rating: 9
}
console.log(movie["rating"]);

// practice problem 7:
const college ={
    collegeName: "ndc",
    established: 1949,
    groups: ["Science","Arts","Commerce"]
}
console.log(college.groups[1]);

// practice problem 8:
const family = {
    father: {
        name: "Narayon Chandra Mondal",
        age: 35,
        profession: "Teacher"
    },
    mother: {
        name: "Bithika Rani Mondal",
        age: 28,
        profession: "NGO Worker"
    }
}
console.log(family["father"].age + family["mother"].age);