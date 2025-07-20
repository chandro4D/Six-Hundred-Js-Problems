// practice problem 1:
const data = {
    product:"Data",
    price:450
    };
try{
   const result = JSON.parse(data);
    console.log(result);
}catch(error){
    console.log("Invalid JSON format");
}

// practice problem 2:

function validateInput(input){
   try{
      if(input.includes("@")){
        console.log("Email is Valid");  
      }else{
        throw new Error("Invalid Email address");
      }
   }catch(error){
        if(error){
            console.log(error.message);
        }
   }
}
validateInput("Chandra@gamil.com");
// practice problem 3:

// practice problem 4:

// practice problem 5:

// practice problem 6:

// practice problem 7:
