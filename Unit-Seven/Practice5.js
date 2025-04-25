// practice problem 1:
for(let num = 20; num <= 50; num++){
    if(num % 7 == 0){
        console.log(num);
    }
}

// practice problem 2:
for(let num1 = 40; num1 <= 80; num1++){
    if(num1 % 5==0 && num1 % 7 ==0){
        console.log(num1);
    }
}

// practice problem 3:
let sum = 0;
for(let num2 = 1; num2 <= 40; num2++){
    if(num2 % 13 == 0){
        sum = sum + num2;
    }
}
console.log("The sum is:",sum);


// practice problem 4:
for(let num3= 1; num3 <= 50; num3 += 4){
    console.log(num3);
}

// practice problem 5:
for(let num4 = 0; num4 <= 100; num4++){
    if(num4 % 9 == 0 && num4 % 6 == 0){
        console.log(num4);
    }
}

// practice problem 6:
let sum1 = 0;
for(let num5 = 1; num5 <= 50; num5++){
    
    if(num5 % 3 == 0 && num5 % 4 == 0){
        sum1 = sum1 + num5;
        console.log(num5);
    }
}
console.log("the sum is:",sum1);