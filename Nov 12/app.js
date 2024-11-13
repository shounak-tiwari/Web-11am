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
      deleteButton.innerText = "Delete";
      deleteButton.classList.add("delete-btn");
      deleteButton.addEventListener("click", () => listItem.remove());

      // Create edit button
      const editButton = document.createElement("button");
      editButton.innerText = "Edit";
      editButton.classList.add("edit-btn");
      editButton.addEventListener("click", () => editTask(listItem));
  
      // Append buttons to list item
      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);
      todoList.appendChild(listItem);
  

  function editTask(listItem) {
      // Get current text and create an input field for editing
      const currentText = listItem.firstChild.textContent;
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = currentText;
      
      // Create a save button for updating
      const saveButton = document.createElement("button");
      saveButton.innerText = "Save";
      saveButton.classList.add("save-btn");
      
      // Replace current list item content with input and save button
      listItem.innerHTML = "";
      listItem.appendChild(editInput);
      listItem.appendChild(saveButton);

      // Save updated task text
      saveButton.addEventListener("click", () => {
          const updatedText = editInput.value.trim();
          if (updatedText) {
            listItem.innerText = updatedText;
            listItem.appendChild(editButton);
              listItem.appendChild(deleteButton);  
              
          }
      });
    }
  }
});
