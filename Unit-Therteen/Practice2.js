// practice problem 1:
const numbers = [100,120,10,20,50,300];
const bigNum = numbers.some(num => num > 100);
console.log(bigNum);

// practice problem 2:
const array = [5,10,15,20,25,63];
const isDivByFive = array.every(Num => Num % 5 == 0);
console.log(isDivByFive);

// practice problem 3:
const words = ["Chandra","Bindu","Nabodip","Bithika","Narayon","hello"];
const isEqualHello = words.some(word => word == "hello" );
console.log(isEqualHello);

// practice problem 4:
const ages = [19,20,40,30,13];
const more = ages.every(age => age>18);
console.log(more);

