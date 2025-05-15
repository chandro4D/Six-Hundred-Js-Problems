// practice problem 1:
function noDuplicate(arrOfNumbers){
    let newArray = [];
    for(const num of arrOfNumbers){
        if(newArray.includes(num) == false){
            newArray.push(num);
        }
    }
    return newArray;
}
const arr = [1,5,61,5,87,7,8,81,61];
console.log(noDuplicate(arr));

let a = 5;
let b = 7;
console.log(a,b);
const temp = a;
a=b;
b=temp;
console.log(a,b);