// practice problem 1:
function TaxRange(incomeAmount){
    if(incomeAmount <= 50000){
        return 10;
    }
    else if(incomeAmount > 50000 && incomeAmount<100000){
        return 20;
    }
    else if(incomeAmount > 100000 && incomeAmount< 200000){
        return 30;
    }
    else if(incomeAmount > 200000){
        return 40;
    }
}
console.log(TaxRange(10000000));


// practice problem 2:
function deliveryCost(Kg){
    if(Kg < 10){
        return 100 ;
    }
    else if(Kg < 20){
        return 300;
    }
    else if(Kg < 50){
        return 1000;
    }
    else if(Kg > 50){
        return 100 ;
    }
}
console.log(deliveryCost(664));


// practice problem 3:
function gradeCalculation(marks){
    if(marks > 80){
        return "A" ;
    }else if(marks >= 70 && marks <= 79){
        return "B";
    }else if(marks >= 60 && marks <= 69){
        return "C" ;
    }else if(marks >= 50 && marks <= 59){
        return "D" ;
    }else{
        return "F" ;
    }
}
console.log(gradeCalculation(93));