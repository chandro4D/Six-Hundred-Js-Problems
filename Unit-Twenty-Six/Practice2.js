const restaurants = [
    { id: 1, name: "Pizza Place", menu: [{ name: "Pepperoni Pizza", price: 12 }] },
    { id: 2, name: "Sushi House", menu: [{ name: "Salmon Sushi", price: 15 }] }
];
const orders = [];
const reviews = [];
/* Discount in percentage */
const discountCodes = { "SAVE10": 10, "WELCOME15": 15 };


// Task----01: 
function getFoodPrice(restaurantName, foodName) {
    const restaurant = restaurants.find(n => n.name === restaurantName);

    if (!restaurant) {
        return "Restaurant not found";
    }
    const foodItem = restaurant.menu.find(i => i.name === foodName);
    if (!foodItem) {
        return "Food Item Not Found"
    } else {
        return foodItem.price
    }
}

getFoodPrice("Pizza Place", "Pepperoni Pizza");

// Task----02:
function placeOrder(customer, restaurantName, foodItem, discountCode) {
    let foodPrice = getFoodPrice(restaurantName, foodItem);

    if (!foodPrice) {
        console.log("Food Item Not Found")
    };
    console.log(`Food Price Before Discount: ${foodPrice}`);

    if (discountCode in discountCodes) {
        foodPrice = foodPrice - (foodPrice * discountCodes[discountCode] / 100);
        console.log(`Food Price after discount: ${foodPrice}`);
    } else {
        console.log("Invalid Discount Code");
    }


    const order = {
        id: orders.length + 1,
        customer: customer,
        restaurant: restaurantName,
        foodItem: foodItem,
        price: foodPrice,
        status: "Pending"
    };
    orders.push(order);
    console.log(`Order placed successfully: \n${JSON.stringify(order)} \nOrder ID: ${order.id}`);


}
placeOrder("Chandra Shekhor Mondal", "Pizza Place", "Pepperoni Pizza", "WELCOME15");


// Task----03:
function totalSalesByRestaurant(restaurantName) {
    const totalSales = orders.filter(order => order.restaurant === restaurantName && order.status === "Completed").reduce((total, order) => total + order.price, 0);
    console.log(`Total Sales: ${totalSales}`);
    return totalSales;
}
totalSalesByRestaurant("Pizza Place");

// Task----04:
function submitReview(orderId,restaurantName,rating,reviewStrings){
    let testId = orders.find(Id => Id.id === orderId);
    let restName = orders.find(ResName => ResName.restaurant === restaurantName)
    if(!testId || !restName){
        console.log("Please!! Don`t Give Fake Reviews Without Trying It!!!");
    }
    if(rating < 0 || rating > 5){
        console.log("Please, Ensure The Ratings Are Within 0 To 5")
    }
    if(reviewStrings.length < 20 ){
        console.log("Please Write At Least 20 Characters");
    }
    let review = {
        id: reviews.length+1,
        restaurant: restaurantName,
        rating: rating,
        reviewStrings: reviewStrings
    };
    reviews.push(review);
    console.log(`Review Is Added Successfully,Your review Id Is: ${reviews.length}`)
    return `Review Is Added Successfully,Your review Id Is: ${reviews.length}`

}
submitReview(1,"Pizza Place",5,"Pizza Place Is very good Place For Pizza");