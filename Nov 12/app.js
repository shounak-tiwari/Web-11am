document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-btn");
    const inputField = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
  
    addButton.addEventListener("click", () => {
      const taskText = inputField.value.trim();
      if (taskText) {
        addTask(taskText);
        inputField.value = "";
      }
    });


    function addTask(taskText) {
        const listItem = document.createElement("li");
        listItem.innerText = taskText;
    
        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "delete btn";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", () => listItem.remove());
    
        // Append delete button to list item
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
      }
  
  
  
  });
  

  