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
    for(const arr2 of arr1){
        if(arr2 % 2 != 0){
           let arr4 = arr2*2;
           arr3.push(arr4);
        }
    }
    return arr3;   
}

const arr5=[15,32,32,12,15]
console.log(oddToEven(arr5));
// practice problem 3:
// practice problem 4:
// practice problem 5:
// practice problem 6:
// practice problem 7:
// practice problem 8:
// practice problem 9:
// practice problem 10: