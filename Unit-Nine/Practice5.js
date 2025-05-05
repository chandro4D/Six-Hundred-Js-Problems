// practice problem 1:
const num = [5,15,8,7];
let sum = 0;
function addOddOnly(number){
    for(const addOddNumber of num){
        if(addOddNumber%2 != 0){
            sum = sum + addOddNumber;
        }
    }
    return sum;
}
console.log(addOddOnly(num));

// practice problem 2:
const array = [20,45,78];
function returnSmall(arr){
    let arr1 = arr[0];
    let arr2 = arr[1];
    if(arr1 > arr2){
        return arr2;
    }
    else{
        return arr1;
    }
}
console.log(returnSmall(array));

// practice problem 3:
function hideAge(age){
    if(age < 18){
        return 18;
    }else if(age > 45){
        return 45;
    }else{
        return age;
    }
}
console.log(hideAge(23));

// practice problem 4:
let Array = [2,4,5,7,8,32,45];
let Sum = 0;
function sum4(Num){
    for(const Num1 of Num ){
        if(Num1%4 == 0){
            Sum = Sum+Num1;
        }
    }
    return Sum;
}
console.log(sum4(Array));

// practice problem 5:
function Number1(Number2){
    if(Number2 < 20){
        return Number2*2;
    }
    else{
        return Number2/20;
    }
}
console.log(Number1(80));

// practice problem 6:
const Number4 = [-5,15,-8,12,34,70,-7];
let Sum3 = 0;
function addNegOnly(Number5){
    for(const NegativeNum of Number5){
        if(NegativeNum < 0){
            Sum3 = Sum3 + NegativeNum;
        }
    }
    return Sum3;
}
console.log(addNegOnly(Number4));

// practice problem 7:
const Array7 = [12,3,7,8];
let multi = 1;
function Multiplication(Array8){
    for(const Array9 of Array8){
        if(Array9 % 3 == 0){
            multi = multi * Array9;
        }
    }
    return multi; 
}
console.log(Multiplication(Array7));