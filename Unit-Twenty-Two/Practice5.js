// practice problem 1:
commentNums++;
let commentNums = 20;
console.log(commentNums);
// Get this "ReferenceError: Cannot access 'commentNums' before initialization" error


// practice problem 2:
views/2;
const views = 500;
console.log(views);
// Get this "ReferenceError: Cannot access 'views' before initialization" error


// practice problem 3 :
   /*
      The Temporal Dead Zone (TDZ) in JavaScript is the time between when a `let` or `const` variable is 
      hoisted and when it’s initialized. Accessing the variable during this period throws a **ReferenceError**. 
      It’s important because it prevents accidental use of variables before declaration, making code safer and 
      more predictable.
   */


// practice problem 4 :


// practice problem 5 :
   /*
      In JavaScript, variables declared with var are hoisted to the top of their scope, 
      meaning the declaration is moved up during the compilation phase but not the 
      initialization. As a result, you can access the variable before its declaration, 
      but its value will be undefined until the assignment is reached.

      Example:
      console.log(a); // undefined
      var a = 10;
      console.log(a); // 10

      Here, the declaration var a; is hoisted to the top, but the assignment a = 10 
      happens later.

   */


// practice problem 6 :
   /*
      Both let and var are hoisted, but their behavior is different. Variables declared 
      with `var` are initialized with `undefined` at the top of their scope, while `let` 
      variables stay uninitialized in the temporal dead zone (TDZ) until their actual 
      declaration is reached, causing a `ReferenceError` if accessed early.
   */

      
// practice problem 7 :