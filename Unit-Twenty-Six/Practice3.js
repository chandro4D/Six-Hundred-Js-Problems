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
                balance: 100
            }
            users.push(newUser);
            console.log("Register New User:", newUser)
            return true;
        },
        loginUser: function (name, Pin) {
            if (users.find(p => p.pin === Pin)) {
                console.log("Log In Successfully..Name: ", name)
                return true;
            }
            else {
                console.log("Your Pin Is Incorrect Or Name")
                return false;
            }
        },
        addMoney: function (name, pin, amount) {
            if (userDatabase.loginUser(name, pin) === true) {
                const IdentifyUser = users.find(n => n.name === name) && users.find(p => p.pin === pin);
                IdentifyUser.balance +=  amount;
                return `Your Name Is:->${name} \n${amount} Tk Added Your Account!! \nYour Current Balance Is:->${IdentifyUser.balance}`;
            } else { 
                return "Sorry!! We couldn’t add the money. Your amount has been refunded."
            }
        },
        checkBalance: function(name,pin){
            if(userDatabase.loginUser(name,pin)=== true){
                const IdentifyUser = users.find(n => n.name === name) && users.find(p => p.pin === pin);
                return `Your Name Is:-> ${name} \nYour Current Balance Is:->${IdentifyUser.balance}`;
            }else{
                return "You don’t have permission to check the balance.";
            }
        },
        sendMoney: function(senderName,senderPin,receiverName,sendAmount){
            if(userDatabase.loginUser(senderName,senderPin) !== true){
                console.log("You don’t have the permission to SendMoney.")
            }else{
                const IdentifySender = users.find(n => n.name === senderName) && users.find(p => p.pin === senderPin);
                if(IdentifySender.balance >= sendAmount){
                    const IdentifyReceiver = users.find(n => n.name === receiverName);
                    if(!IdentifyReceiver){
                        console.log("Money Receiver is not found!!")
                    }else{
                        IdentifySender.balance = IdentifySender.balance - sendAmount;
                        IdentifyReceiver.balance = IdentifyReceiver.balance + sendAmount;
                        console.log("Your Money Is Send Successfully!!\n");
                    }
                }else{
                    console.log("Your Account Have Not Enough Money");
                }
            }
        },
        
        transactionHistory: [

        ]
    };
})();
userDatabase.registerUser("Chandra", 1234);
userDatabase.registerUser("Bindu",2345);
// userDatabase.loginUser("Chandra", 1234);
// console.log(userDatabase.addMoney("Chandra", 1234, 10))
// console.log(userDatabase.checkBalance("Chandra", 1234))

userDatabase.sendMoney("Chandra",1234,"Bindu",10);



// Task:->01

// Task:->02

// Task:->03

// Task:->04
// Task:->05
// Task:->06