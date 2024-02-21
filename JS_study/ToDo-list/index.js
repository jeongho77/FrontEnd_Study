const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const savedTodoList = JSON.parse(localStorage.getItem("saved-items"));
const savedWeatherData = JSON.parse(localStorage.getItem("saved-weather"));

const createTodo = function (storageData) {
  let todoContents = todoInput.value;

  if (storageData) {
    todoContents = storageData.contents;
  }

  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  //클래스 complete 이름으로 생성
  //토글이기에 켰다 껏다가능
  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
    saveItemsFn();
  });

  //더블클릭시 삭제
  newLi.addEventListener("dblclick", () => {
    newLi.remove();
    saveItemsFn();
  });

  //정상적이지 않은값이면 그냥 넘어감
  if (storageData?.complete) {
    newLi.classList.add("complete");
  }

  newSpan.textContent = todoContents; //CONTENT라 <SPAN>!!!</SPAN>안에 들어가는거같음
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todoList.appendChild(newLi);
  todoInput.value = "";
  //todoList.children[0].querySelector('span').textContent;
  saveItemsFn();
};

const keyCodeCheck = function () {
  if (window.event.keyCode === 13 && todoInput.value.trim() !== "") {
    // 엔터는 13
    createTodo();
  }
};

const deleteAll = function () {
  const liList = document.querySelectorAll("li");
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
  }
  saveItemsFn();
};

const saveItemsFn = function () {
  const saveItems = [];

  for (let i = 0; i < todoList.children.length; i++) {
    const todoObj = {
      contents: todoList.children[i].querySelector("span").textContent,
      complete: todoList.children[i].classList.contains("complete"),
    };
    saveItems.push(todoObj);
  }

  saveItems.length === 0
    ? localStorage.removeItem("saved-items")
    : localStorage.setItem("saved-items", JSON.stringify(saveItems));

  //localStorage에 값을 넣을려면 string으로 줘야해서 JSON.stringify(값)을 하면 string으로 파싱해서 넣을수있음.

  //   console.log(typeof JSON.stringify(saveItems));
};

if (savedTodoList) {
  for (let i = 0; i < savedTodoList.length; i++) {
    createTodo(savedTodoList[i]);
  }
}

const weatherDataActive = function ({ location, weather }) {
  const weatherMainList = [
    "Clear",
    "Clouds",
    "Drizzle",
    "Rain",
    "Snow",
    "Thunderstorm",
  ];
  weather = weatherMainList.includes(weather) ? weather : "Fog";
  const locationNameTag = document.querySelector("#location-name-tag");

  locationNameTag.textContent = location;
  document.body.style.backgroundImage = `url('./images/${weather}.jpg')`;

  if (
    !savedWeatherData || //local에 Data가 없을경우 TRUE / 있으면 false
    savedWeatherData.location !== location || //local에 location이 서버와와 다를경우 true
    savedWeatherData.weather !== weather // local에 weather이 서버와와 다를경우 true
    // local에 저장된값이 없는경우 실행한다.
    // 만약 있어도 location이 서버에서 받아오는 매개변수 값과 다르면 실행함
  ) {
    //실행하면 값이 최신화 된거기에 local에 저장하기
    console.log("조건식 성립");
    localStorage.setItem(
      "saved-weather",
      JSON.stringify({ location, weather })
    );
  } else {
    console.log("조건식 성립x");
  }
};

const weatherSearch = function ({ latitude, longitude }) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d5adc8ce05e9e4cd506e8886305da11e`
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json.name, json.weather[0].description);
      const weatherData = {
        location: json.name,
        weather: json.weather[0].main,
      };
      weatherDataActive(weatherData);
    })
    .catch((err) => {
      console.log(err);
    });
};

const accessToGeo = function ({ coords }) {
  const { latitude, longitude } = coords;
  // shorthand property 구조분해할당
  const positionObj = {
    latitude,
    longitude,
  };
  weatherSearch(positionObj);
};

const askForLocation = function () {
  navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
    console.log(err);
  });
};

askForLocation();

if (savedWeatherData) {
  weatherDataActive(savedWeatherData);
}

// const promiseTest = function () {
//   return new Promise((resolver, reject) => {
//     setTimeout(() => {
//       // resolver("success");
//       reject("error");
//     }, 5000);
//   });
// };

// promiseTest().then((res) => {
//   console.log(res);
// });
