// Importing functions from utils.js
import { addTask, toggleTask } from './utils';

// Adding event listeners after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Add click event to mark task as completed
  document.getElementById('taskList').addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      toggleTask(event.target);
    }
  });
});
