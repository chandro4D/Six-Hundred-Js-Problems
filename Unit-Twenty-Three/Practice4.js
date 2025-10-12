// practice problem 1:
    /*
        In javascript has a system to work first isolatedly and that is IIFE. IIFE full 
        form is Immediately Invoked Function Expression. It is a function that runs and 
        executes itself immediately after its creation.
        When we need to do a task once then we can use IIFE.
    */


// practice problem 2:
(function(){
    console.log("I am isolated from outer scope!");
})();


// practice problem 3 :
(()=>{
    console.log("Borrow From Arrow");
})();


// practice problem 4 :
(function(temperature){
    let celsius = temperature - 273.15;
    console.log(`Temperature in Celsius is: ${celsius.toFixed(3)}°C`);
})(300);

