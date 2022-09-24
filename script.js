const quizData = [
  {
    question: 'How old is Lucas?',
    a: '11',
    b: '33',
    c: '19',
    d: '28',
    correct: 'd',
  },
  {
    question: "What month is Lucas's birthday on?",
    a: 'April',
    b: 'December',
    c: 'August',
    d: 'March',
    correct: 'c',
  },
  {
    question: 'What year was he born?',
    a: '1994',
    b: '2003',
    c: '1876',
    d: '2010',
    correct: 'a',
  },
  {
    question: 'What kind of developer is Lucas?',
    a: 'Back-End Developer',
    b: 'Full Stack Developer',
    c: 'Front-End Developer',
    d: 'Software Developer',
    correct: 'c',
  },
  {
    question: 'Is Lucas a good developer?',
    a: 'Yes',
    b: 'Maybe',
    c: 'No',
    d: 'Aims to be better than yesterday',
    correct: 'd ',
  },
]

const answerEls = document.querySelectorAll('.answer')
const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function getSelected() {
  let answer = undefined

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false
  })
}

submitBtn.addEventListener('click', () => {
  //check to see answer
  const answer = getSelected()
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++
    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
        <h2>You've successfully answered correctly ${score}/${quizData.length} questions</h2> 
        
        <button onClick="location.reload()">Reload</button>
        `
    }
  }
})
