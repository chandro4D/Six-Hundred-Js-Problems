// practice problem 1:
/*
    async-await is used in JavaScript to handle asynchronous operation in a way that`s
    more readable and easier to manage than traditional approaches like callbacks or 
    .then() with Promises.
*/

// practice problem 2:
async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/user/2');
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log('Error', error);
    }
}
fetchUser();

// practice problem 3:

// practice problem 4:

// practice problem 5:
async function commentLoad() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const comment = await response.json();
        console.log(comment);

    } catch (error) {
        console.log('Error', error);
    } finally {
        console.log("Request Completed!");
    }
}
commentLoad();

// practice problem 6:
async function userInformation(ID) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${ID}`);
        const userData = await response.json();
        console.log(userData);

    } catch (error) {
        console.log('Error', error);
    } finally {
        console.log("Request for a user Data is completed");
    }
}
userInformation(10);
