## 📝 1주차 공부내용 📝

FLEX의 핵심은 여러개를 하나로 묶어서 정렬하는것 

postion : absolute 박스의 절대 위치 <br>
postion : relative 부모박스기준으로 상대 위치 <br>
position : fixed 화면 기준으로 절대 위치 화면 예시 ) 맨 아래 네비게이션 바를 고정 <br>
<br>
padding: 30px 70px 30px 70px; 할시 상하좌우로 순서 선택 <br>
flex-direction: low;   COLUM 으로 설정하면 수직 나열 LOW는 수평 나열 <br>

flex-direction: low;<br>
>*COLUM 으로 설정하면 수직 나열 LOW는 수평 나열.*<br>

align-items: center;<br>
>*부모박스의 가로를 기준으로 정렬함.*<br>

justify-content: space-evenly;<br>
>*부모박스의 세로를 기준으로 정렬함.*<br>

input text형식일시 밑에줄만 남기고싶다면   
    border-width: 0 0 1px; <br>
    outline: none; <br>

<img width="500" alt="index" src="https://github.com/jeongho77/FrontEnd_Study/assets/115057094/c7caeb10-324e-497f-a117-6eac4766fdb0">

## 0107 끝
<hr>

## 0108 js 변수, 배열 

변수와 상수는 데이터를 담는 공간 “( 상자 ) 

선언 let(변수명) let name

할당 (변수명) = 데이터 name = “철수”

선언 + 할당 let( 변수명) = (데이터) let name = “철수” 같다는 의미가 아님 변수에 데이터를 대입함

                              변수와 상수의 종류와 특징

| 태그 | var | let | const |
| --- | --- | --- | --- |
| 이름중복(재선언) | O | X | X |
| 데이터수정(째할당) | O | O | X |
- 변수와 상수의 작명 규칙(관례에 따라주는게 협업에 좋음!)
    - camelCase
        - 낙타의 등을 닮았다고해서 camel
        - let myMoney = 300
        - JS에서 주로 사용
    - snake_case
        - 언더바 __ 가 뱀처럼 늘어져있다고해서 snake
        - let my_money = 300
        - PYTHON에서 사용

const array = [”배열”]

array.legnth 배열의 길이구하기

array[숫자(인덱스)] 배열의 값 꺼내기

array.push() 배열 맨 뒤에 값 추가

array.pop() 배열 맨 마지막값 삭제

array.sort() 배열요소 정렬

array.includes(값) 배열 데이터확인 있으면 true 없으면 false 로 나옴 

array.concat(array2) 배열과 배열을  연결

array.join() 배열을 문자로 만들기

array.slice() 배열 분리

array.filter() 배열에서 원하는 요소 뽑기

array.map() 배열의 모든 요소 변경

array.split(”문자열”) 자른대상 앞뒤로 구분할수잇음 let a = array.split(”문자열”)[0] 

array.join(” “) 해주면 배열을 안에있는 문자열로 이어줌

const profile = {
name :”홍길동”
age :49,
height :,
school : “코드중학교”
}

키는 비어질수있지만 값은 비울수없음.

[profile.name] ⇒ 홍길동
profile[”age”] ⇒ 49

let classmates = [
{name: "철수", age : 13, school: "다람쥐초등학교"},
{name: "영희", age:8,school:"공룡초등학교"},
{name: "훈이", age:11, school:"거북이초등학교"}
]

classmates[0].school
⇒ '다람쥐초등학교'

## 싸이월드 만드는중
<img width="500" alt="index" src="https://github.com/jeongho77/FrontEnd_Study/assets/115057094/99f5f352-1d36-4d27-8fd1-0f9319e9981f">

# 0108 끝
<hr>
