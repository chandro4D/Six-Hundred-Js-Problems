// practice problem 1:
setTimeout(()=>{
    console.log("I wasted 3 seconds of my life by looking at screen and doing nothing");
},3000);

// practice problem 2:
let num = 129;
setInterval(()=>{
    num += 2;
    console.log(num);
},2000);

// practice problem 3:
let Num = 0;
const intervalId = setInterval(()=>{
    Num++;
    console.log("I am learning javascript");
    if(Num == 6){
        clearInterval(intervalId);
    }
},2000)

// practice problem 4:
   /* If we remove second parameter of setTimeout(),it take 0 millisecond by default.
   JavaScript doesn’t support microsecond level timing.. */
