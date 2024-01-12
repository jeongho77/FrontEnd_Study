const startWord = () => {
    let myword = document.getElementById("myword").value //내가쓴 단어
    let word = document.getElementById("word").innerText //제시어

    let lastword = word[word.length - 1] // 제시어의 마지막 단어
    let firstword = myword[0]

    console.log(lastword)
    console.log(firstword)

    if(lastword === firstword) {
        document.getElementById("result").innerText = "정답입니다."
        document.getElementById("word").innerText = myword
        document.getElementById("myword").value = ""
    }else { 
        document.getElementById("result").innerText = "땡!"
        document.getElementById("myword").value = ""
    }

    
}