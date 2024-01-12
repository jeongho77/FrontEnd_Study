
const random = () => { 
    let result = String ( Math.floor(Math.random() * 1000000) ).padStart(6,"0")
    console.log(result)
    document.getElementById("target").innerText = result
    document.getElementById("target").style.color = `#${result}`

    let time = 10

    setInterval(function(){
        if(time >= 0){
            let min = Math.floor( time / 60)
            let sec = String(time % 60).padStart(2, "0");
            console.log(min + ":" + sec)
            document.getElementById("timer").innerText = min + ":" + sec
            
            time = time - 1
        }

        if(time == 0){
            const btn = document.getElementById("end");
            btn.disabled = true;
        }
    },1000)

    }


    