// practice problem 1:
const arr = [11,12,13,14,15,16,17,18];
function elementInfo(array){
    const size = array.length;
    if(size%2 == 0){
        console.log("The Array Size Is Even &","The Array Size Is:",size);
    }
    else{
        console.log("The Array Size Is Odd","The Array Size Is:",size);
    }
    
}
elementInfo(arr);

// practice problem 2:
function FirstChar(name){
    return name[0];
}
console.log(FirstChar("Chandra"));

// practice problem 3:
function number(num){
    if(num >10){
        return num/10;
    }
    else{
        return num*10;
    }
}
console.log(number(5));

// practice problem 4:
const number1 = [10,20,30,40,50]
function addFirstTwoNum(num1){
    return num1[0] + num1[1];
}
console.log(addFirstTwoNum(number1));

// practice problem 5:
function num3(n){
    if(n >= 0){
        return n*2;
    }
    else{
        return n*3;
    }
}
console.log(num3(2));


// practice problem 6:
function compareName(name1,name2){
    if(name1.length > name2.length){
        return true;
    }
    else{
        return false;
    }
}
console.log(compareName("ShekhorMondal","Chandra"));

// practice problem 7:
function multiplication(num4,num5){
    if(num4*num5 > 100){
        return (num4*num5)/2;
    }
    else{
        return num4*num5;
    }
}
console.log(multiplication(1,20));
