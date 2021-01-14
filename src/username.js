const userNameContainer = document.querySelector(".js-username");

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const input = form.querySelector("input");
  const value = input.value;
  localStorage.setItem("username", value);
  printName(value);
}

function printInput() {
  const input = document.createElement("input");
  const form = document.createElement("form");

  input.placeholder = "이름을 알려주세요";
  input.type = "text";
  input.className = "name__input";

  form.addEventListener("submit", handleSubmit);
  form.appendChild(input);
  userNameContainer.appendChild(form);
}

function printName(username) {
  userNameContainer.innerHTML = "";
  const title = document.createElement("span");
  title.className = "name__text";
  title.innerHTML = `안녕하세요 ${username} 님`;
  userNameContainer.appendChild(title);
}

function loadName() {
  const username = localStorage.getItem("username");
  if (username === null) {
    printInput();
  } else {
    printName(username);
  }
}

function init() {
  loadName();
}

init();
