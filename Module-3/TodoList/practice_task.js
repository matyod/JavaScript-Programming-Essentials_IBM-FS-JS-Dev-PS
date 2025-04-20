/*
### Practice task
1. In this practice task, you need to include a button to clear all tasks at once.

2. For this you need to create a button named **Clear All Tasks** in the HTML file.

3. Then create a function to clear the tasks list, which you have stored in **tasks** array in lab, and call this function at the time the **Clear All Tasks** button is clicked.

> **Hint:** you can empty the entire array when user clicks on the button.
*/

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');

let tasks = [];

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push({
      text: taskText,
      completed: false
    });
    taskInput.value = "";
    displayTasks();
    logTasks();
    // console.log(tasks[0].completed);
  }
  else {
    alert("Please enter a valid task");
    return;
  }
}

function displayTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement('li');

    li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
    <label for="task-${index}">${task.text}</label>`;

    li.querySelector('input').addEventListener('change', () => {
      toggleTask(index);
    });

    taskList.appendChild(li);
  });
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  // displayTasks();
}

function clearCompletedTasks() {
  tasks = tasks.filter(task => !task.completed);
  displayTasks();
}

function clearAllTasks() { 
  tasks.length = 0;
  displayTasks();
}

addTaskBtn.addEventListener('click', addTask);
clearCompletedBtn.addEventListener('click', clearCompletedTasks);
clearAllBtn.addEventListener('click', clearAllTasks);

function logTasks() {
  console.log(tasks);
}