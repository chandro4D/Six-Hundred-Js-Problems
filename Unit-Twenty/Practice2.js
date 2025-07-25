// practice problem 1:
let x = null;
console.log(x??=75);
       // output is : 75(Because x is null)

// practice problem 2:
const product = {name:"Smart Watch",Price: 100}
console.log(product?.stock??0);

// practice problem 3 :
const productDetails = {name:"Smart Watch",Price: 100,discount:0};
const Discount = productDetails.discount || 10;
console.log(Discount);
// practice problem 4 :
const vehicle = {name:"Toyota",version:2020,engine:null};
console.log(vehicle?.engine??"Engine info missing");

// practice problem 5 :
const restaurant = {name:"Fathers Restaurant"};
console.log(restaurant?.menu??"Menu Not Available");

// practice problem 6 :
const profile = {
    social:{
        facebook: 23
    }
}
console.log(profile?.social?.twitter??"Twitter handle not available");


