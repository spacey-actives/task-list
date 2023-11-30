// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    // Create a new list item
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    // Append the new task to the list
    document.getElementById('taskList').appendChild(newTask);

    // Clear the input field
    taskInput.value = '';
  }
}

// Function to mark or unmark a task as completed
function toggleTask(task) {
  task.classList.toggle('completed');
}

// Exporting functions to be used in other files
export { addTask, toggleTask };
