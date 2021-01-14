const form = document.querySelector(".js-todo"),
  input = document.querySelector(".js-addTodo"),
  list = document.querySelector(".js-todoList");

let todos = [];

function persistTodos() {
  const stringTodo = JSON.stringify(todos);
  localStorage.setItem("todos", stringTodo);
}

function addTodo(text) {
  // console.log(text);
  const todo = document.createElement("li");
  const deleteBtn = document.createElement("span");
  const label = document.createElement("label");

  todo.className = "todo";
  todo.id = todos.length + 1;

  deleteBtn.innerHTML = "❌";
  deleteBtn.className = "todo__button";
  deleteBtn.addEventListener("click", handleDelete);

  label.innerHTML = text;

  todo.appendChild(label);
  todo.appendChild(deleteBtn);
  list.appendChild(todo);
  saveTodo(text);
}

function saveTodo(text) {
  const todoObject = {
    id: todos.length + 1,
    value: text,
  };
  todos.push(todoObject);
  persistTodos();
}

function onSubmit(event) {
  event.preventDefault();

  const value = input.value;
  input.value = "";
  addTodo(value);
}

function handleDelete(event) {
  const target = event.target;
  const li = target.parentElement;
  const ul = li.parentElement;
  const todoID = li.id;

  ul.removeChild(li);
  todos = todos.filter(function (todo) {
    return todo.id !== parseInt(todoID);
  });
  persistTodos();
}

function loadTodos() {
  const loadedTodos = localStorage.getItem("todos");
  if (loadedTodos !== null) {
    const parsedTodos = JSON.parse(loadedTodos);
    parsedTodos.forEach(function (todo) {
      addTodo(todo.value);
    });
  }
  return;
}

function init() {
  loadTodos();
}

form.addEventListener("submit", onSubmit);

init();
