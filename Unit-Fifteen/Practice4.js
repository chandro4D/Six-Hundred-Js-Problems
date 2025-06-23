// practice problem 1:
const isSame = (true == 1);
if (isSame == true) {
    console.log("Same");
}
else {
    console.log("Different");
}

// practice problem 2:
const obj1 = {};
const obj2 = {};
if (obj1 === obj2) {
    console.log("Same");
}
else {
    console.log("Different");
}
// practice problem 3:
let arr1 = [];
let arr2;
arr1 = arr2;
if (arr1 === arr1) {
    console.log("Same");
}
else {
    console.log("Different");
}

// practice problem 4:
function IsSame(num, boolean) {
    if (num == boolean) {
        console.log("Equal");
    }
    else {
        console.log("Not Equal");
    }
}
IsSame(9,true);

// practice problem 5:
if ("" == false) {
    console.log("Same");
}
else {
    console.log("Different");
}

// practice problem 6:
console.log(null === undefined);

// practice problem 7:
console.log(1 == "1");