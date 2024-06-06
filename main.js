import quizs from "./questions.json" assert { type: "json" };
let questionEl = document.getElementById("question");
let submitBtn = document.getElementById("submit");
let ulGroup = document.getElementById("answers");
let nextBtn = document.getElementById("next");
let score = 0
let questionsAsked = 0

let selectedVal = ""
let quizArr = []
//push to quizArr everything
//get last answer
startQuiz()
submitBtn.addEventListener("click", gome)
function startQuiz() {
    nextBtn.innerHTML = "Next"
    let random = Math.floor(Math.random() * quizs.questions.length)
    quizArr.push(quizs.questions[random].answer)
    questionEl.innerHTML = quizs.questions[random].question
    ulGroup.innerHTML = `
            <li><input type="radio" name="answer" value="A"><label>${quizs.questions[random].A}</label></li>
            <li><input type="radio" name="answer" value="B"><label>${quizs.questions[random].B}</label></li>
            <li><input type="radio" name="answer" value="C"><label>${quizs.questions[random].C}</label></li>
            <li><input type="radio" name="answer" value="D"><label>${quizs.questions[random].D}</label></li>
    `
    
}
function gome() {
    //check answer
    //add color or dec to right answ
    //add score
    //next btn 
    //length of test
    let radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        if (radio.checked) {
            selectedVal = radio.value
        }
    })
    checkAnswer()
    // submitBtn.innerHTML = "Next"
    // submitBtn.style.backgroundColor = "black"
    submitBtn.style.display = "none"
    nextBtn.style.display = "block"
    console.log("Questions asked: " + questionsAsked, "Score: " + score)
}
function checkAnswer() {
    let rightAnswer =  quizArr[quizArr.length - 1] 
    let radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        if (radio.value === rightAnswer) {
            radio.style.backgroundColor = "green"
            if(selectedVal == rightAnswer){ 
                score++
            }
        }
    })
    questionsAsked++
}
nextBtn.addEventListener("click", () => {
    nextBtn.style.display = "none"
    submitBtn.style.display = "block"
    if (questionsAsked == 10) {
        questionEl.innerHTML = "Your score is " + score + " out of 10"
        ulGroup.innerHTML = ""
        submitBtn.style.display = "none"
        nextBtn.innerHTML = "Restart"
        nextBtn.style.display = "block"
        score = 0
        questionsAsked = 0 
        quizArr = []
    } else {
        startQuiz()
    }
    
})


