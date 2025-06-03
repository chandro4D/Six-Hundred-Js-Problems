// practice problem 1:
const product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell"
}
const { name , ...details} = product;
console.log(details);

// practice problem 2:
const project = {
    id: 101,
    title: "Web App",
    budget: 3000,
    client: "Tech Corp"
}
const {title,...project_details} = project;
console.log(project_details);

// practice problem 3:
const programmer = {
    name: "Sophia",
    language: "JavaScript",
    experience: 5,
    specialty: "Frontend",
    tools: "React"  
}
const {language,specialty,...Details} = programmer;
console.log(Details);

// practice problem 4:
const numArray = [10,20,3,30,300,3000];
const [first ,second ,...allNum] = numArray;
console.log(allNum);

// practice problem 5:
let sum = 0;
function add_num(First,Second,...addAll){
    for(const add of addAll){
        sum = sum + add;   
    } 
    return sum;
}
console.log(add_num(1,1,1,2,3,6));

// practice problem 6:
let Sum = 0;
let count = 0;
function avg(...AllNum){
    for(const Num of AllNum){
        Sum = Sum + Num;
        count++ ;
    }
    const Avg = Sum/count ;
    return Avg;
} 
console.log(avg(5,5,5,5,5,5,5,5));

