const todoInput = document.querySelector("#todo-input");

const keyCodeCheck = function () {
  if (window.event.keyCode === 13 && todoInput.value !== "") {
    // 엔터는 13
    const todoList = document.querySelector("#todo-list");
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");

    newSpan.textContent = todoInput.value; //CONTENT라 <SPAN>!!!</SPAN>안에 들어가는거같음
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
    todoInput.value = "";
  }
};
