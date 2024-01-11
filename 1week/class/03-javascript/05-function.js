
const random = () => { 
    let result = String ( Math.floor(Math.random() * 1000000) ).padStart(6,"0")
    console.log(result)
    document.getElementById("target").innerText = result
    document.getElementById("target").style.color = `#${result}`


    }
