// practice problem 1:

// practice problem 2:
const user = {
    name: "Chandra Shekhor Mondal",
    email: "chandroshakhor7@gmail.com",
    address:"2 No Koyra,Khulna",
    order_history: {
        product1: "Watch",
        product2: "Phone",
        product3: "HeadPhone"
    }
}
const JsonString = JSON.stringify(user);
console.log(JsonString);

// practice problem 3:
const shopping_Cart = {
    products: ["Watch","Phone","HeadPhon"],
    totalPrice: 5000,
    user_details: {
        name: "Chandra Shekhor",
        id: "01",
        contact: "01759626470"
    }
}
const JString = JSON.stringify(shopping_Cart);
console.log(JString);

// practice problem 4:
const whether = {
    city: "Khulna",
    temperature: 30,
    humidity: "75%",
    forecast: [30,35,35,36,30,35,34]
}
const whetherString = JSON.stringify(whether);
console.log(whetherString);

// practice problem 5:
const movieDetails = {
    title: "Moyner Bap",
    releaseYear: 2025,
    actors: ["A","B","C","D","E"],
    actorsRating: [5,6,5,9,10]
};
const movieDetailsJson = JSON.stringify(movieDetails);
const movieDetailsParse = JSON.parse(movieDetailsJson);
console.log(movieDetailsParse);

// practice problem 6:

// practice problem 7:
