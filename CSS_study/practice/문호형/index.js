window.addEventListener("scroll", function () {
  console.log(window.scrollY);
});

const box = document.getElementById("box");

window.addEventListener("scroll", function () {
  // 현재 스크롤 위치를 가져옵니다.
  var scrollPosition =
    window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition >= 30) {
    console.log("스크롤 위치가 30 이상입니다!");
    // box의 배경색을 변경합니다. 여기서는 빨간색으로 변경합니다.
    document.getElementById("box").style.transform = "translateY(-100%)";
  } else if (scrollPosition == 0) {
    document.getElementById("box").style.transform = "translateY(0)";
  }
});
