// Task----01:
let products = [
    {
        id: 1,
        name: "Smartphone",
        price: 200,
        stock: 10
    },
    {
        id: 2,
        name: "Laptop",
        price: 800,
        stock: 5
    }
];
let cart = [];
let orders = [];
function addToCart(productId, quantity) {
    let product = products.find(p=> p.id === productId);
    if(!product){
        return "Product Not Found";
        
    }
    if(product.stock < quantity){
        return "Insufficient stock available";
    }
    product.stock = product.stock - quantity;

    let productInfo = {
        id: productId,
        quantity: quantity,
        price: product.price,
        name: product.name
    };
    cart.push(productInfo);

    console.log(`${product.name} added to cart. Quantity: ${quantity}`);

    return `${product.name} added to cart. Quantity: ${quantity}`;
}
addToCart(1,2);


// Task----02:
function viewCart() {
    cart.forEach(item => {
        console.log(`Product Name: ${item.name}, Product ID: ${item.id}, Quantity: ${item.quantity}, Price per unit: ${item.price}`);
    })
}
viewCart();

// Task----03:
function placeOrder() {
    if(cart.length === 0){
        return "Your cart is empty";
    }
    else{
        cart.forEach(item => {
            let totalPrice = item.price * item.quantity;
            console.log(totalPrice);
            let totalOrder = {
                id: item.id,
                name: item.name,
                quantity: item.quantity,
                totalPrice: totalPrice
            };
            orders.push(totalOrder);
        })
        cart.length = 0; // Clear the cart after placing the order
        return "Order placed successfully";
    }
}
placeOrder();
console.log(orders)
