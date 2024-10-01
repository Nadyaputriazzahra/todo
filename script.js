function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value === '') {
        alert("Task cannot be empty!");
        return;
    }
    
    const listItem = document.createElement('li');
    listItem.textContent = taskInput.value;
    taskList.appendChild(listItem);
    
    taskInput.value = '';
}
