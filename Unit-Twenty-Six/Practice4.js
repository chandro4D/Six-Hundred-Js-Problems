class TodoApp{
    constructor(todos){
        this.todos = todos;
    }
    addTodo(TaskName,TaskDuration,TaskCategory){
        const task = {
            id: todos.length + 1,
            TaskName: TaskName,
            TaskDuration: TaskDuration,
            TaskCategory: TaskCategory,
            completed: false
        }
        todos.push(task);
    }
    remove(){

    }
    complete(){

    }
    display(){

    }
}