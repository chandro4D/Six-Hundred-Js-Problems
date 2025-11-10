class TodoApp {
  constructor(todos) {
    this.todos = todos;
  }
  addTodo(TaskName, TaskDuration, TaskCategory) {
    const task = {
      id: todos.length + 1,
      TaskName: TaskName,
      TaskDuration: TaskDuration,
      TaskCategory: TaskCategory,
      completed: false
    }
    this.todos.push(task);
  }
  removeTodo(taskName) {
    const findTask = todos.find(task => task.TaskName === taskName);
    const TaskIndex = todos.indexOf(findTask);
    todos.splice(TaskIndex, 1);

  }
  completeTodo(taskName) {
    const findTask = todos.find(task => task.TaskName === taskName);
    if (!findTask) {
      return false;
    }
    else {
      findTask.completed = true;
      return true;
    }
  }
  displayTodoList(taskCategory) {
    if (!taskCategory) {
      console.log(todos)
    } else {
      const findTask = todos.filter(task => task.TaskCategory === taskCategory);
      console.log(findTask);
    }
  }
  hoursWorked() {
    const totalTime = todos.reduce((sum,task) => sum + task.TaskDuration,0 );
    console.log(totalTime);
  }
  timeNeeded(){
    const totalTime = this.todos.reduce((SumIncompleteTaskTime,task) => task.completed === false? SumIncompleteTaskTime + task.TaskDuration : SumIncompleteTaskTime);
    console.log(totalTime);
  }
  editTodo(taskName,{}){

  }
  getTodo(taskName){
    const findTask = this.todos.find(task => task.TaskName === taskName);
    if(!findTask){
      return undefined;
    }else{
      return findTask;
    }
  }
  largestTodo(){
    const findIncompleteLargeTask = this.todos.reduce((largestTask,task) => task.TaskDuration > largestTask.TaskDuration ? task : largestTask);
    return findIncompleteLargeTask;
  }
  SmallestTodo(){
    const findIncompleteSmallTask = this.todos.reduce((smallestTask,task) => task.TaskDuration < smallestTask.TaskDuration ? task : smallestTask);
    return findIncompleteSmallTask;
  }
} 