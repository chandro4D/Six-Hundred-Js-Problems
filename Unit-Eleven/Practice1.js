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
// practice problem 7:
// practice problem 8:
// practice problem 9:
// practice problem 10: