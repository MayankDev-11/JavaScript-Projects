const quizData = [
    {question: 'How old is Mayank',
    a : "11",
    b : "12",
    c : "13" ,
    d : "14",
    correct:"c"
    },{
        question:"What is the most used programming lanuage in 2019?",
        a:"Java",
        b:"Javascript",
        c:"C",
        d:"Python",
        correct:"d"
    },{
        question:"Who is the president of US?",
        a:"Florin Pop",
        b:"Donald Trump",
        c:"Ivan Saldano",
        d:"Mayank",
        correct:"b"
    },{
        question:"What does HTML stand for?",
        a:"Hypertext Markup Language",
        b:"Cascading Style Sheet",
        c:"Jason Object Motation",
        d:"Helicopters Terminals  Motorboats Lamborgini",
        correct:"a"
    },{
        question:"What year was javascript launched?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"None of the above",
        correct:"b"
    }
]

let currentQuestion = 0;

const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0
// let answer = undefined;

function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer =  answerEl.id;
        }
    })
    
    return answer
}
loadQuiz()

let score = 0

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText =currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

submitBtn.addEventListener("click",() => {
    
    const answer = getSelected()


    if (answer){

        if (answer == quizData[currentQuiz].correct){
            score++
        }

        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        currentQuiz++
    }

})