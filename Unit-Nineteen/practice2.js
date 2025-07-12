// practice problem 1:
const getUser = new Promise((resolve,reject)=>{
    const usersAvailable = true;
    const users = ["Chandra","Shekhor","Mondal","Bindu"];
    if(usersAvailable){
        resolve(users);
    }else{
        reject("No User Data")
    }
})

// practice problem 2:
const payment = new Promise((resolve,reject)=>{
    const amount = 45;
    if(amount > 0){
        resolve("Payment Process Is Successful");
    }else{
        reject("Payment Rejected");
    }
})

// practice problem 3:


// practice problem 4:


// practice problem 5:

