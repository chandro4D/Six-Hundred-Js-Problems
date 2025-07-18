// practice problem 1:
const getUser = new Promise((resolve, reject) => {
    const usersAvailable = true;
    const users = ["Chandra", "Shekhor", "Mondal", "Bindu"];
    if (usersAvailable) {
        resolve(users);
    } else {
        reject("No User Data")
    }
})

// practice problem 2:
const payment = new Promise((resolve, reject) => {
    const amount = 45;
    if (amount > 0) {
        resolve("Payment Process Is Successful");
    } else {
        reject("Payment Rejected");
    }
})

// practice problem 3:
function sendEmail(email) {
    const validEmail = ["chandra1@gmail.com", "chandra2@gmail.com", "chandra3@gmail.com", "chandra4@gmail.com", "chandra5@gmail.com"];
    const ValidateEmail = new Promise((resolve, reject) => {
        if (validEmail.includes(email)) {
            resolve("Email From Nigerian Prince");
        } else {
            reject("Lets Dance in the spam folder");
        }

    })
    ValidateEmail
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));
}
sendEmail("chandra10@gmail.com");

