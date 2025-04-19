// practice problem 1:
const price = 4500;
if(price >= 6000){
    const discounted_price = price/100 * 15 ;
    const pay = price - discounted_price;
    console.log(pay);
}
else if(price >= 3000){
    const discounted_price = price/100 * 5 ;
    const pay = price - discounted_price;
    console.log(pay);
}
else{
    console.log(price);
}


// practice problem 2:
const age = 10 ;
const price1 = 5000;

if(age > 60){
  const discount = price1/100 * 50 ;
  const discountedPrice = price1 - discount;
  console.log(discountedPrice);
}
else if(age < 12){
  console.log("All Foods Are Free For Child");
}
else{
    console.log(price1);
}

// practice problem 3:
const bankBalance = 5900;
if(bankBalance>5000){
    console.log("You Are Rich,,Please Marry Me...");
}
else if(bankBalance <1000){
    console.log("Deposit please");
}
else{
    console.log("Enjoy your life")
}

// practice problem 4:
const marks = 60;
if(marks > 80){
    console.log("A+");
}
else if( marks > 50){
    console.log("Pass");
}
else{
    console.log("fail");
}

// practice problem 5:
const page = 447;
if(page > 500){
    console.log("heart-attack size book");
}
else if(page > 100){
    console.log("Mid-size book");
}
else{
    console.log("Small book");
}

// practice problem 6:
const temperature = 25;

if(temperature > 20){
  console.log("Hot Hot")
}
else if(temperature > 0){
  console.log("Cool Cool");
}
else{
  console.log("Ice");
}

// practice problem 7:
const level = 0;
if(level > 50){
    console.log("Pro Gamer");
}
else if(level > 10){
    console.log("Expert");
}
else{
    console.log("novice");
}
