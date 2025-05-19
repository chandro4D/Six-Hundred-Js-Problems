// practice problem 1:
function addThreeNumber(num1 = 0,num2=0,num3=0){
    const add = num1+num2+num3;
    console.log(add);
}
addThreeNumber(0,12,0);

// practice problem 2:
function moneyDeposit(tk=50){
    const addMoney = tk ;
    return addMoney;
}
console.log(moneyDeposit());

// practice problem 3:
function nameAndIncome(name = "Anonymous",income=0){
    console.log(name,"Monthly income is:",income);
}
let nam="Chandra Shekhor Mondal";
let moIncome=4000 ;
nameAndIncome(nam,moIncome);

// practice problem 4:
function square(Num){
    if(isNaN(Num)){
        return 1;
    }
    else{
        return Num*Num;
    }
}
let Num1 = "Chandra Shekhor Mondal";
console.log(square(Num1));

// practice problem 5:
function productAndPrice(Name="Unknown Product",Price=1){
    console.log(Name,"price is:",Price);
}
productAndPrice("Book",100);

// practice problem 6:
function fevBook(FevBooks = ["JS Book"]){
    for(const book of FevBooks){
        console.log(book);
    }
}
const fevBooks = ["Poher patchily","Nokshi Kather Meth","Sonchita","Koshbi"];
fevBook(fevBooks);

// practice problem 7:
function totalPrice(PriceQuantity={price:10,quantity:1}){
        const Price = PriceQuantity.price;
        const Quantity = PriceQuantity.quantity;
        return Price*Quantity;
}
const obj ={ price:200,quantity:2};
console.log(totalPrice(obj));

// practice problem 8:
const newArray = [];
function Array(array = [5,10,15]){
    for(const arr1 of array){
        let arr2 = arr1*2 ;
        newArray.push(arr2);
    }
    return newArray;
}
const Array1 = [20,40,60];
console.log(Array(Array1));

// practice problem 9:
function principalRate(PrincipalRate = {principle:1000,rate:5}){
    const simpleInterest = (PrincipalRate.principle)*(PrincipalRate.rate)/100;
    return simpleInterest;
}
let calInterest = {principle:2000,rate:10}; 
console.log(principalRate(calInterest));

// practice problem 10:
function actualSalary(salaryTax = {salary:50000,tax:10}){
    const taxAmount = (salaryTax.salary)*(salaryTax.tax/100) ;
    const ActualSalary = salaryTax.salary - taxAmount;
    return ActualSalary;
}
const salary_Tax = {salary:100000,tax:15};
console.log(actualSalary(salary_Tax));
