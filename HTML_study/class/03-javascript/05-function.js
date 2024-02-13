let isStarted = false; //타이머 연속 실행 방지하기위한 변수

let auth = () => {
    
    if(isStarted === false){ 
        // 타이머가 작동중이 아닐때 실행한다
            isStarted = true  // 타이머 실행중! 체크!
            document.getElementById("btn").disabled = false
            let result = String ( Math.floor(Math.random() * 1000000) ).padStart(6,"0")
            console.log(result)
            document.getElementById("target").innerText = result
            document.getElementById("target").style.color = `#${result}`
        
            let time = 10
            let timer
            
            timer = setInterval(function(){
                if(time >= 0){
                    let min = Math.floor( time / 60)
                    let sec = String(time % 60).padStart(2, "0");
                    console.log(min + ":" + sec)
                    document.getElementById("timer").innerText = min + ":" + sec
                    time = time - 1
                }
        
                else{
                    document.getElementById("btn").disabled=true
                    isStarted = false;
                    console.log("작동중")
                    clearInterval(timer)
                }
            },1000)
        
    }else{

    }
}



    