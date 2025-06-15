// practice problem 1:
const email = "User@Example.Com";
console.log(email.toLowerCase());

// practice problem 2:
const greeting = "hELlo WoRLd";
console.log(greeting.toLowerCase());
console.log(greeting.toUpperCase());

// practice problem 3:
const language = "JavaScript";
const lowerCase = language.toLowerCase();
console.log(lowerCase.includes("script"));

// practice problem 4:
const text = "NodeJs";
const firstCharacter = text[0];
if(firstCharacter === firstCharacter.toUpperCase()){
    console.log("The First Character Is An Upper Case Character");
}
else{
    console.log("The First Character Is Not An Upper Case Character");
}
