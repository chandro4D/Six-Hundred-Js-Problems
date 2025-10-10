// practice problem 1:
const brand = "Xiaomi";
switch (brand) {
    case "Apple":
        console.log("USA");
        break;
    case "Samsung":
        console.log("Korea");
        break;
    case "Xiaomi":
        console.log("China");
        break;
    default:
        console.log("Unknown Source");
}


// practice problem 2:
          // using if else
const browser = "Chrome";
if (browser === "Chrome") {
    console.log("Best for Developers");
}
else if (browser === "Brave") {
    console.log("Privacy focused");
}
else if (browser === "Safari") {
    console.log("Apple users Choice")
}
else {
    console.log("Unsupported Browser");
}


            // using switch case
switch (browser) {
    case "Chrome":
        console.log("Best for Developers");
        break;
    case "Brave":
        console.log("Privacy focused");
        break;
    case "Safari":
        console.log("Apple users Choice")
        break;
    default:
        console.log("Unsupported Browser");
        break;
    }

// practice problem 3 :
const paymentMethod = "cash";
switch (paymentMethod) {
    case "cash":
        console.log("Pay With Cash");
        break;
    case "credit":
        console.log("Pay With Credit Card");
        break;
    case "debit":
        console.log("Pay With Debit Card");
        break;
    default:
        console.log("Invalid Payment Method");
        break;
}



// practice problem 4 :
        // using switch
const memberShip = "silver";
switch (memberShip) {
     case "free":
         console.log("Access Limited Content");
         break;
     case "silver":
         console.log("Access Most Content");
         break;
     case "gold":
         console.log("Access Premium Content");
         break;
    case "platinum":
            console.log(" FullAccess");
         break;
     default:
         console.log("Unknown Membership");
         break;
}
        // using if else
if(memberShip === "free"){
    console.log("Access Limited Content");
}
else if(memberShip === "silver"){
    console.log("Access Most Content");
}
else if(memberShip === "gold"){
    console.log("Access Premium Content");
}
else if(memberShip === "platinum"){
    console.log("Full Access");
}
else{
    console.log("Unknown Membership");
}


// practice problem 5 :
const orderStatus = "shipped";

switch (orderStatus) {
    case "pending":
        console.log("Your order is being processed.");
        break;
    case "shipped":
        console.log("Your order is on the way.");
        break;
    case "delivered":
        console.log("Your order has been delivered.");
        break;
    case "canceled":
        console.log("Your order has been canceled.");
        break;
    default:
        console.log("Unknown order status.");
}


// practice problem 6 :
const grade = "A";
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Poor");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("Invalid grade");
        break;
}
