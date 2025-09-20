// practice problem 1:

const laptop = {
    brand: "Dell",
    getBrand: function () {
        console.log(this.brand)
    }
}
laptop.getBrand()

const mobile = {
    brand: "ASUS"
}
laptop.getBrand.call(mobile);

// practice problem 2:
/*   
   There are a few key rules for this in JavaScript:

           1.Global / Strict mode
           2.Method call (obj.method())
           3.Simple function call (func())
           4.Constructor call (new Func())
           5.Explicit binding (call, apply, bind)
           6.Arrow functions (() => {})
*/


// practice problem 3 :
const manager = {
    name: 'Rana',
    tasks: ['code review', 'meeting'],
    assignWork: function (newTask) {
        // Inside this method, 'this' refers to the object calling it.
        this.tasks.push(newTask);
        console.log('Tasks now:', this.tasks);
    },
}
manager.assignWork('write docs');
// practice problem 4 :

// practice problem 5 :

// practice problem 6 :

// practice problem 7 :

// practice problem 8 :

// practice problem 9 :



