// practice problem 1:
function Name(chandra){
    chandra()
}
function shekhor(){
    console.log("I Am Chandra Shekhor Mondal");
}
Name(shekhor);

// practice problem 2:
function studentInfo(details){
    Object.keys(details).forEach(key => {
        console.log(key);
    })
}
const obj = {
    name: "Chandra",
    age: 25,
    
}
studentInfo(obj);

// practice problem 3:
function numberProcessor(num,callback){
    const divisionByFive = num / 5 ;
    callback(divisionByFive);
}
function forCallBack(output){
    console.log("The Result Is:",output);
}
numberProcessor(50,forCallBack);

// practice problem 4:
function WishBirthDay(Wish){
    Wish()
}
function birthday(){
    console.log("***Happy Birthday Chandra Shekhor Mondal***");
}
WishBirthDay(birthday);
