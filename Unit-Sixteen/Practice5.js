// practice problem 1:
const newSet = new Set([1,2,2,3,4,4,5]);
console.log(newSet);

// practice problem 2:
const newSet1 = new Set();
newSet1.add(10);
newSet1.add(20);
newSet1.add(10);
newSet1.add(30);
console.log(newSet1);

// practice problem 3:
const deleteSet = new Set([10,20,30]);
deleteSet.delete(10);
console.log(deleteSet);

// practice problem 4:
const setToArray = [...new Set([1,2,3,4,2,1,5,5])];
console.log(setToArray);
