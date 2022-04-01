// Naming all the variables

const title = document.querySelector(".title");
const todoInput = document.querySelector(".todo-input");
const todoInputDate = document.querySelector(".date-input");
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

  const todoLi = document.createElement("li");
  todoLi.classList.add("todo");

  // li text created
  const newTodo = document.createElement("div");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoLi.appendChild(newTodo);

  // li date created
  const newDate = document.createElement("div");
  newDate.innerHTML = todoInputDate.value;
  newDate.classList.add("new-date-input");
  todoLi.appendChild(newDate);

  //Check mark
  const completedButton = document.createElement("button");
  // innerHTML is going to add to the button the i tag that is inside
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoLi.appendChild(completedButton);

  //Delete button creation
  const deleteButton = document.createElement("button");
  // innerHTML is going to add to the button the i tag that is inside
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("trash-btn");
  todoLi.appendChild(deleteButton);

  //Append to the list
  todoList.appendChild(todoLi);

  //Clear todo input value after adding list items
  todoInput.value = "";
  todoInputDate.value = "";
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
    const todoTask = item.parentElement.childNodes[0];
    todoTask.classList.toggle("completed");
    const todoDate = item.parentElement.childNodes[1];
    todoDate.classList.toggle("completed");
  }
}
