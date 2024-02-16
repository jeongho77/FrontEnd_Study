const todoInput = document.querySelector("#todo-input");

const createTodo = function () {
  const todoList = document.querySelector("#todo-list");
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");
  console.log(newBtn);

  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
    //클래스 complete 이름으로 생성
    //토글이기에 켰다 껏다가능
  });

  newLi.addEventListener("dblclick", () => {
    newLi.remove();
    //더블클릭시 삭제
  });

  newSpan.textContent = todoInput.value; //CONTENT라 <SPAN>!!!</SPAN>안에 들어가는거같음
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todoList.appendChild(newLi);
  todoInput.value = "";
};

const keyCodeCheck = function () {
  if (window.event.keyCode === 13 && todoInput.value !== "") {
    // 엔터는 13
    createTodo();
  }
};

const deleteAll = function () {
  const liList = document.querySelectorAll("li");
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
  }
};
