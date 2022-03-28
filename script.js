// Naming all the variables

const title = document.querySelector(".title");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const todoButton = document.querySelector(".todo-button");
const completeButton = document.querySelector(".complete-btn");
const deleteButton = document.querySelector(".delete-btn");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions for the app

function addTodo(event) {
  // Stops page from refreshing itself
  event.preventDefault();

  if (todoInput.value.trim() === "") {
    return;
  }

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //Check mark
  const completedButton = document.createElement("button");
  // innerHTML is going to add to the button the i tag that is inside
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Delete mark
  const deleteButton = document.createElement("button");
  // innerHTML is going to add to the button the i tag that is inside
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("trash-btn");
  todoDiv.appendChild(deleteButton);

  //Append to the list
  todoList.appendChild(todoDiv);
  //Clear todo input value after adding list items
  todoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;
  // delete the item
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  // check mark on item
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
