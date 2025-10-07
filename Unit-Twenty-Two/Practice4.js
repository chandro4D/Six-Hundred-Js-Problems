// practice problem 1:
     /*
        In JavaScript, a closure is created when a function "remembers" the variables from its lexical scope, 
        even after that outer function has finished executing. This means the inner function can access and 
        manipulate variables defined outside of it. Closures are often used for data privacy, state management
        and creating function factories.
     */


// practice problem 2:
     function fridgeTracker() {
        let count = 0;
        return function(){
            count++;
            return count;
        }
     }
     const chandraCounter = fridgeTracker();
     const binduCounter = fridgeTracker();
     console.log(chandraCounter());
     console.log(chandraCounter());
     console.log(binduCounter());


// practice problem 3 :
     function taskTracker() {
        let taskFinished = 0;
        return function(){
            taskFinished++;
            return taskFinished;
        }
     }
        const chandraTask = taskTracker();
        const binduTask = taskTracker();
        console.log(chandraTask());
        console.log(chandraTask());
        console.log(binduTask());
