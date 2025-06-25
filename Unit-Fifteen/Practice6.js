// practice problem 1:
const taxRate = 15;
function taxAmount(income){
    const tax = income * 15/100 ;
    console.log("Your Tax Amount is:",tax,"Taka");
}
taxAmount(30000);

// practice problem 2:
function secret(){
    let insideSecret = "Internal Secret Hiding Place";
}
/* ReferenceError: insideSecret is not defined */
// console.log(insideSecret);


// practice problem 3:
if(true){
    let temperature = 100;
}
/* ReferenceError: temperature is not defined */
// console.log(temperature);


// practice problem 4:
function schoolDetails(){
    const schoolName = "Bedkashi Collegiate School" ;
    function displaySchoolName(){
        console.log(schoolName);
    }
    displaySchoolName();
}
schoolDetails();
