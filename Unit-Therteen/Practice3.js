// practice problem 1:
const allNumbers = [5,10,15,20,25];
const add = allNumbers.reduce((sum,num) => sum + num , 0);
console.log(add);

// practice problem 2:
const allGoods = [
    {name: "Shampoo",Price: 100},
    {name: "Soap", Price : 50},
    {name: "toothPast",Price : 75}
];
const allGoodsPrice = allGoods.reduce((sum,goods)=> sum + goods.Price,0);
console.log(allGoodsPrice);

// practice problem 3:
const productList = [
    {Name : "Pen",price: 5},
    {Name : "Book",price: 50},
    {Name : "Bag",price: 100}
];
const allProductsPrice = productList.reduce((Sum , product) => Sum + product.price,0);
console.log(allProductsPrice);

// practice problem 4:
const Numbers = [1,2,3,4,5];
const Multi = Numbers.reduce((mul,Num) => mul*Num,1);
console.log(Multi);

// practice problem 5:
const array = [10,20,30,40,50];
const maxNum = array.reduce((Num , num) => num > Num ? num:Max ,0);
console.log(maxNum);

// practice problem 6:
const numArr = [100,200,300,400];
const AddAll = numArr.reduce((sum,num)=>sum+num,50);
console.log(AddAll);
