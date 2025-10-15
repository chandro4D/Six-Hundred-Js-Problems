// practice problem 1:
     /*
        Local storage is use for store date in browser for a long time but session storage
        is use for store data in browser for a short time.
        Both store data in key value pair and are accessible only within  in same domain.
     */

// practice problem 2:
localStorage.setItem("mode","dark");

localStorage.setItem("mode","light");



// practice problem 3 :
const userToken = "abcd1234";
sessionStorage.setItem(userToken);
console.log(sessionStorage.getItem(userToken));

// practice problem 4 :
const userName = "Alex";
localStorage.setItem(userName);
localStorage.removeItem(userName);

// practice problem 5 :
history.go(-2);

