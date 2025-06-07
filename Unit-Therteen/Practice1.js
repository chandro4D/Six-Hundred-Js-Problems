// practice problem 1:
const price = [30,45,20,60,10];
const increasePrice = price.map(inc => inc+13);
console.log(increasePrice);

// practice problem 2:
const Name = ["Messi","Maradona","Pele","Zidane","Ronaldo"];
const largeName = Name.filter(large =>large.length > 5);
console.log(largeName);

// practice problem 3:
const numbers = [10,15,20,25,30,35];
const firstBig = numbers.find(num => num>20);
console.log(firstBig);


// practice problem 4:
const hight = [65,70,68,72,68,73];
const larger = hight.filter(lar => lar > 69);
console.log(larger);

// practice problem 5:
const Numbers = [7,10,15,20,25,30];
// const divisionByThree = Numbers.map(Num  => console.log(Num/3));
// console.log(divisionByThree);
Numbers.forEach(Num => console.log(Num / 3));

// practice problem 6:
// practice problem 7:
// practice problem 8:
// practice problem 9:
// practice problem 10: