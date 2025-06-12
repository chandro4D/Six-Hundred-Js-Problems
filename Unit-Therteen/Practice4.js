// practice problem 1:
const numbers = [50,12,25,8,15];
numbers.sort((num1,num2)=> num1 -num2);
console.log(numbers);

// practice problem 2:
const Numbers = [13,2,45,9,6];
Numbers.sort((num1,num2) => num2 - num1);
console.log(Numbers);

// practice problem 3:
const friends = [
    {name : "Ali",age : 29},
    {name : "Sara",age : 22},
    {name : "Tariq",age :35}
];
friends.sort((name1,name2) => name1.age - name2.age);
console.log(friends);

// practice problem 4:
const names = ["Nabil","Zubayer","Sarwar","Delwar"];
names.sort();
console.log(names);