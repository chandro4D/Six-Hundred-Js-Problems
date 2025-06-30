// practice problem 1:
const sentence = "I bought an orange";
const changeSen = sentence.replace(/orange/g,"grape");
console.log(changeSen);

// practice problem 2:
const sentence1 = "I like to have apple and banana";
const pattern = /ana/ ;
console.log(pattern.test(sentence1));

// practice problem 3:
const sentence2 = "I am eating apple.apple is good.apple helps me a lot.";
const changeSen1 = sentence2.replace(/apple/g,"JavaScript");
console.log(changeSen1);

