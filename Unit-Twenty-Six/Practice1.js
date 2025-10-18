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
        price: product.price
    };
    cart.push(productInfo);

    console.log(`${product.name} added to cart. Quantity: ${quantity}`);

    return `${product.name} added to cart. Quantity: ${quantity}`;
}
addToCart(1,2);

// Task----02:

// Task----03:
// Task----04: