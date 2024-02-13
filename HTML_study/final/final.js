const phone = () => {
    let phone1 = document.getElementById("phone1").value
    let phone2 = document.getElementById("phone2").value
    let phone3 = document.getElementById("phone3").value

    if(phone1.length === 3){
        document.getElementById("phone2").focus()
        
    }
    if(phone2.length === 4){
        document.getElementById("phone3").focus()
    }

    if(phone3.length === 4){
        let random_btn = document.getElementById("random_btn")
        random_btn.disabled = false
        random_btn.style.cursor = "pointer";
    }
    
}

let isStarted = false //중복 시작방지 변수
let timer
const random_number = () => {
    let random_btn = document.getElementById("random_btn")
    console.log("버튼클릭")
    if(isStarted === false){
        isStarted = true
        let random = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
        document.getElementById("random_number").innerText = random

        let check_btn = document.getElementById("check_btn");
        

        random_btn.style.cursor = "auto"

        let time = 10
        
        
        timer = setInterval(function(){
            
            if(time >= 0){
            let minute = Math.floor(time/60)
            let second = time % 60   
            document.getElementById("timer").innerText = `${minute} : ${second}`
            time = time - 1
            check_btn.disabled = false;
            check_btn.style.cursor = "pointer";
            
            }else{
                isStarted = false
                check_btn.disabled = true;
                check_btn.style.cursor = "auto";
                clearInterval(timer)
            }
        },1000)
    }
}

const number_check = () => {
    alert("인증이 완료되었습니다.")
    clearInterval(timer)
    document.getElementById("timer").innerText = "0 : 0"
    let check_btn = document.getElementById("check_btn")
    check_btn.style.cursor = "auto";
    check_btn.disabled = true;
}

const submit = () => {

    // 연속 클릭했을때 대비 값 지우기
    document.getElementById("email_span").innerText = "";
    document.getElementById("name_span").innerText = "";
    document.getElementById("pwd1_span").innerText = "";
    document.getElementById("pwd2_span").innerText = "";
    document.getElementById("area_span").innerText = ""
    document.getElementById("gender_span").innerText = ""

    let emailvalue = document.getElementById("input1").value;
    let name = document.getElementById("input2").value;
    let pwd1 = document.getElementById("input3").value;
    let pwd2 = document.getElementById("input4").value;
    let area = document.getElementById("input5").value;
    const genderOptions = document.getElementsByName('gender');
    let selectedGender;
    console.log(`${pwd1} , ${pwd2}`)
    for (const option of genderOptions) {
        if (option.checked) {
            selectedGender = option.value;
            break;
        }
    }

    if (emailvalue && name && pwd1 && pwd2 && area && selectedGender) {
        if(emailvalue.includes("@") && pwd1 === pwd2){
            alert("코드캠프가 가입을 축하합니다!")
        }
        if(!emailvalue.includes("@")){        
            document.getElementById("email_span").innerText = "이메일에 @가 포함되어야 합니다."      
        }
        if(pwd1 !== pwd2){
            document.getElementById("pwd2_span").innerText = "비밀번호가 동일하지 않습니다."
        }
        
                           
    }if(emailvalue.length === 0){
        document.getElementById("email_span").innerText = "이메일을 입력해주세요."
    }if(name.length === 0){
        document.getElementById("name_span").innerText = "이름을 입력해주세요."
    }if(pwd1.length === 0){
        document.getElementById("pwd1_span").innerText = "비밀번호를 입력해주세요"
    }if(pwd2.length === 0){
        document.getElementById("pwd2_span").innerText = "비밀번호를 입력해주세요"
    }if(area.length === 0){
        document.getElementById("area_span").innerText = "지역을 선택해 주세요."
    }if(!selectedGender){
        document.getElementById("gender_span").innerText = "성별을 선택해 주세요."
    }
    
    

    // 올바른 메서드를 사용하고, 결과값을 email 변수에 저장
    
}
