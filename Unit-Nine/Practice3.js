// practice problem 1:

function num(num){
    if(num > 10){
        return true;
    }
    return false;
}
console.log(num(10));

// practice problem 2:
function number(number){
    if(number % 13 == 0){
        return true;
    }
    return false;
}
console.log(number(13));

// practice problem 3:
function totalBill(rice,curry,drinks){
   return rice+curry+drinks;
}
console.log("Your Total Bill Is:",totalBill(20,70,30)); 

// practice problem 4:
function VotingPower(age){
    if(age > 18){
        return "Eligible For Voting";
    }
    return "Not Eligible";
}
console.log(VotingPower(24));

// practice problem 5:
function CharacterLength(name){
    return name.length;
}
console.log(CharacterLength("ChandraShekhorMondal"));

// practice problem 6:
function average(num1,num2,num3){
    return (num1+num2+num3)/3 ;
}
console.log(average(30,20,30));

// practice problem 7:
function isNegative(num6){
    if(num6 > 0){
        return num6;
    }
    return num6*-1;
}
console.log(isNegative(-10));
