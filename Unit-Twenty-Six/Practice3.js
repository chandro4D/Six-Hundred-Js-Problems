const userDatabase = (function(){
    const users = [];
    return {
        registerUser: function(name,pin){
            if(!name || !pin){
                return console.error("Please! Give Your Name & Pin"); 
            }
            if(typeof pin !== "number" || String(pin).length !== 4){
                return console.error("Please give Pin As A Number And Ensure the Pin is 4 digit");
                
            };
            const newUser = {
                id: users.length+1,
                name: name,
                pin: pin,
                balance: 0
            }
            users.push(newUser);
            return true;
        },
        loginUser: function(name,phoneNum){
            
        }
    };
})();
userDatabase.registerUser("Chandra", 1234);



// Task:->01

// Task:->02
// Task:->03
// Task:->04
// Task:->05
// Task:->06