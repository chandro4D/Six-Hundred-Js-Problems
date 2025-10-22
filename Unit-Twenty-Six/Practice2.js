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

// Task----05: