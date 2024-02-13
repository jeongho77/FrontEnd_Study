const fruits = [
    {number: 1, title:"레드향" },
    {number: 2, title:"샤인머스켓" },
    {number: 3, title:"산청딸기" },
    {number: 4, title:"한라봉" },
    {number: 5, title:"사과" },
    {number: 6, title:"애플망고" },
    {number: 7, title:"딸기" },
    {number: 8, title:"천혜향" },
    {number: 9, title:"과일선물세트" },
    {number: 10, title:"귤" }
    ]

    fruits[0].number + " " + fruits[0].title
    //"1 레드향"



    let classmates = [
        {name: "철수", age : 13, school: "다람쥐초등학교"},
        {name: "영희", age:8,school:"공룡초등학교"},
        {name: "훈이", age:11, school:"거북이초등학교"}
        ]
        
        classmates[0].school
        // '다람쥐초등학교'




        for (let count = 0; count <persons.length; count++){
            if(persons[count].age >= 19){
                console.log(persons[count].name + "성인입니다");
            }else{
                console.log(persons[count].name + "미성년자입니다");
            }
        }
        // VM2201:5 철수 미성년자입니다
        // VM2201:3 영희 성인입니다
        // VM2201:3 도우너 성인입니다
        // VM2201:3 안녕 성인입니다

        // 백틱 사용법
        for(let i = 0; i < fruits.length; i++){
            console.log(`과일 차트 ${fruits[i].number}위는 ${fruits[i].title}입니다`);
        } 

        //랜덤번호 뽑기
        let result = String ( Math.floor(Math.random() * 1000000) ).padStart(6,"0")
        //undefined
        result
        // '691084'