const messageContainer = document.querySelector("#d-day-message");
messageContainer.style.color = "red";
messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요. </h3>";

const container = document.querySelector("#d-day-container");
container.style.display = "none";

const intervalIdArr = [];

const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  const dateFormat = inputYear + "-" + inputMonth + "-" + inputDate;
  console.log(dateFormat);

  counterMake(dateFormat);
};

const counterMake = (dateFormat) => {
  console.log("반복실행중");
  const nowDate = new Date();
  const targetDate = new Date(dateFormat).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;

  // 만약, remaining이 0 이라면, 타이머가 종료 되었습니다. 출력
  // 수도코드
  if (remaining <= 0) {
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
    messageContainer.style.display = "flex";
    container.style.display = "none";
    setClearInterval();
    return;
  } else if (isNaN(remaining)) {
    // 만약 , 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  }

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };

  const documentObj = {
    days: document.querySelector("#days"),
    hours: document.querySelector("#hours"),
    min: document.querySelector("#min"),
    sec: document.querySelector("#sec"),
  };

  const documentArr = ["days", "hours", "min", "sec"];
  const timeKeys = Object.keys(remainingObj);

  let i = 0;
  for (let tag of documentArr) {
    document.getElementById(tag).textContent = remainingObj[timeKeys[i]];
    i++;
  }

  //   //   const docKeys = Object.keys(documentObj);
  //   //   객체를 반복문으로 간편화 시키기
  //   //   for (let i = 0; i < timeKeys.length; i = i + 1) {
  //   //     documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]];
  //   //   }
  //   let i = 0;
  //   for (let key in documentObj) {
  //     documentObj[key].textContent = remainingObj[timeKeys[i]];
  //     i++;
  //   }

  //   documentObj["days"].textContent = remainingObj["remainingDate"];
  //   documentObj["hours"].textContent = remainingObj["remainingHours"];
  //   documentObj["min"].textContent = remainingObj["remainingMin"];
  //   documentObj["sec"].textContent = remainingObj["remainingSec"];
};

const starter = () => {
  container.style.display = "flex";
  messageContainer.style.display = "none";
  dateFormMaker();
  const intervalId = setInterval(dateFormMaker, 1000);
  intervalIdArr.push(intervalId);
  console.log(intervalIdArr);
};

const setClearInterval = function () {
  container.style.display = "none";
  messageContainer.style.display = "flex";
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
};
