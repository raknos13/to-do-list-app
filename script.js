document.addEventListener('DOMContentLoaded', function() {
    var addTaskButton = document.getElementById("addTaskButton");
    addTaskButton.addEventListener('click', addTask);
});

function addTask() {
    var taskInput = document.getElementById('task');
    var taskText = taskInput.value.trim();

    if (taskText == '') {
        alert("Please enter a task.");
        return;
    }

    var todoList = document.getElementById("todo-list");

    var todoItem = document.createElement("div");
    todoItem.className = "todo-item"; 

    var taskLabel = document.createElement("span");
    taskLabel.innerText = taskText;    

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.addEventListener("change", function() {
        if (this.checked) {
            todoItem.style.textDecoration = "line-through";
        } else {
            todoItem.style.textDecoration = "none";
        }
    })

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function() {
        todoList.removeChild(todoItem);
    });

    todoItem.appendChild(checkBox);
    todoItem.appendChild(taskLabel);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);

    // Clear input after adding
    taskInput.value = "";
}