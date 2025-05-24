// practice problem 1:
const friends = ["Akibur","Alvi","Sujit","Sabina","Prianka"]
const FirstFriend = () => friends[0]
console.log(FirstFriend());

// practice problem 2:
const mulOfThreeNum = (num1,num2,num3) => num1*num2*num3;
console.log(mulOfThreeNum(1,2,3));

// practice problem 3:
const unKnown = () => "unknown" ;
console.log(unKnown());

// practice problem 4:
const nameTaka = {
    name: "Chandra Shekhor Mondal",
    taka:350
}
const division = (obj) => obj.taka/5 ;
console.log(division(nameTaka));


// practice problem 5:
const arrNum = [70,12,20,10,30,68];
const addFirstAndLastNum = (arr) => arr[0] + arr[arr.length -1];
console.log(addFirstAndLastNum(arrNum));

// practice problem 6:
const addTwoNum = (num1 = 10,num2 =5) => num1+num2
console.log(addTwoNum());
