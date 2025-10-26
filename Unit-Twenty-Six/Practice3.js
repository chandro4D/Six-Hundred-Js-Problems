const userDatabase = (function () {
    const users = [];
    return {
        registerUser: function (name, pin) {
            if (!name || !pin) {
                return console.error("Please! Give Your Name & Pin");
            }
            if (typeof pin !== "number" || String(pin).length !== 4) {
                return console.error("Please give Pin As A Number And Ensure the Pin is 4 digit");

            };
            const newUser = {
                id: users.length + 1,
                name: name,
                pin: pin,
                balance: 0
            }
            users.push(newUser);
            console.log("Register New User:",newUser)
            return true;
        },
        loginUser: function (name, Pin) {
            if (users.find(p => p.pin === Pin)){
                console.log("Log In Successfully")
                return true;
            }  
            else{
                console.log("Your Pin Is Incorrect")
                return false;
            }         
        }
    };
})();
userDatabase.registerUser("Chandra",1234);
userDatabase.loginUser("Chandra", 1234);



// Task:->01

// Task:->02
// Task:->03
// Task:->04
// Task:->05
// Task:->06