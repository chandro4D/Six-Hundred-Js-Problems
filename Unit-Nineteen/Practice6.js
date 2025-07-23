// practice problem 1:
/*
    async-await is used in JavaScript to handle asynchronous operation in a way that`s
    more readable and easier to manage than traditional approaches like callbacks or 
    .then() with Promises.
*/

// practice problem 2:
fetch('https://jsonplaceholder.typicode.com/user/2')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error",error))

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
   /*
     When we need to work with asynchronous task one after another ,then we need to write
     a callback function.These callback function look like a pyramid from a side.So these 
     callback function call Callback hell or Pyramid of Doom.
     When we need to work  asynchronous task we use callback hell.Callback hell is not easy
     to manage and use so we can use async-await instead of callback hell.async-await is easy
     to use and maintain.
   */
  
// practice problem 4:
async function allPost() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
        const AllPost = await response.json();
        console.log(AllPost);
    }catch(error){
        console.log("Error",error);
    }
};
allPost()

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
