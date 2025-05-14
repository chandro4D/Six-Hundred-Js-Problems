// practice problem 1:
function isEvenNumber(array) {
    let sum = 0;
    let count = 0;

    for (const num of array) {
        if (num % 2 === 0) {
            sum += num;
            count++;
        }
    }

    if (count === 0) {
        console.log("There is no Even Number");
    } else {
        let avg = sum / count;
        console.log("Average of ",count," even number:", avg);
    }
}
const arr = [10,20,15, 17];
isEvenNumber(arr);


// practice problem 2:
function oddToEven(arr1){
    let arr3 = [];
    let count1 = 0
    for(const arr2 of arr1){
        if(arr2 % 2 != 0){
           let arr4 = arr2*2;
           arr3.push(arr4);
           count1++
        }
    }
    if(count1 == 0){
        return "There is no odd element in this Array";
    }
    else{
        return arr3; 
    }
      
}
const arr5=[32,32,12,15]
console.log(oddToEven(arr5));


// practice problem 3:
function isOddNumbers(Arr1){
    let Arr4 = [];
    for(const Arr3 of Arr1){
        if(Arr3 % 2 !== 0 ){
            Arr4.push(Arr3);
        }
    }
    if(Arr4.length == 0){
        return "No Odd Numbers Found";
    } 
    else{
        return "Odd Numbers Found";
    }
}
const Arr2=[32,32,12,15,17];
console.log(isOddNumbers(Arr2));

// practice problem 4:
function averageOfOdds(Arr5){
    let Sum = 0;
    let count2 = 0;
    let avg ;
    for(const Arr6 of Arr5){
        if(Arr6 % 2 !== 0){
            Sum = Sum + Arr6;
            count2++;
        }
    }
    if(count2 == 0){
        return "There Is No Odd Numbers";
    }
    else{
        return (Sum/count2).toFixed(2);
    }
}
const Arr7=[32,32,12,5,13,17];
console.log(averageOfOdds(Arr7));


// practice problem 5:
function OddToEven(Arr8){
    let Arr9 = [];
    let count3 =0;
    for(const Arr12 of Arr8){
        if(Arr12 % 2 !== 0){
            let Arr10 = Arr12 - 1;
            Arr9.push(Arr10);
            count3++;
        }
    }
    if(count3 ==0){
       return "There Is No Odd Numbers In This Array"
    }else{
        return Arr9;
    }
}
const Arr11=[32,32,12,15,11];
console.log(OddToEven(Arr11));
