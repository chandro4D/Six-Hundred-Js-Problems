// practice problem 1:
let a = 59;
a = a++;
console.log(a);
a = ++a;
console.log(a);

// practice problem 2:
let orange = 100;
orange /= 15;
console.log(orange);

// practice problem 3 :
let mango = 20;
mango &&= 10;
console.log(mango);
   /*
        The new variable value is 10.Because, When we use AND assignment operator(&&=) 
        for a truthy value then it`s value change .
   */

// practice problem 4 :
let bananas = 50;
bananas *= 4;
console.log(bananas);
    /*
        I use *= this assignment operator.
    */

// practice problem 5 :
let grapes = 19;
grapes ||= 10;
console.log(grapes);
   /*
        The  variable value is 19.Because, When we use ORassignment operator(||=) 
        for a truthy value then it`s value unchanged.
   */

// practice problem 6 :
let apples = 20;
apples -= 10;
console.log(apples);

// practice problem 7 :
let price = undefined;
price ||= 90;
console.log(price);
    /*
        We know that when we use OR assignment operator(||=) ,then for undefined,null,
        falsy value it replace the old value with the new one.
    */

// practice problem 8 :
let tomato = 0;
tomato &&= 5;
console.log(tomato);
    /*
        The tomato variable value is 0.Because, When we use AND assignment operator(&&=) 
        for a falsy value then it`s value remain unchanged.
   */

// practice problem 9 :
let Apples = 15;
Apples %= 6;
console.log(Apples);
     /*
        It is a modulus assignment operator(%=).It calculate the remainder.So,Here the output
        or remainder is 3.
     */
