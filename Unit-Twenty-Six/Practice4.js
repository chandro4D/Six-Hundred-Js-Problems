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
    removeTodo(taskName){
      const findTask = todos.find(task => task.TaskName === taskName);
      const TaskIndex = todos.indexOf(findTask);
      todos.splice(TaskIndex,1);
      
    }
    completeTodo(taskName){
      const findTask = todos.find(task => task.TaskName === taskName);
      if(!findTask){
        return false;
      }
      else{
        findTask.completed = true;
        return true;
      }
    }
    display(){

    }
}