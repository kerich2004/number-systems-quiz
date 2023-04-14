export { startQuiz }

function startQuiz() {
  const checkBtn = document.getElementById('check')
  const aInput = document.querySelector('#guess')
  const showResults = checkBtn.onclick
  const questions = prepareQuestions()
  const mistakes = []

  let i = 0

  showQuestion(questions[0])

  console.log(questions)

  checkBtn.onclick = checkAnswer

  function showQuestion(question) {
    const fromSpan = document.querySelector('.from')
    const toSpan = document.querySelector('.to')
    const qSpan = document.querySelector('.guess-number')
    const qNumber = document.querySelector('.question-number')
    const checkBtn = document.querySelector('#check')

    fromSpan.innerText = dict[question.from]
    toSpan.innerText = dict[question.to]
    qSpan.innerText = question.q
    aInput.value = ''
    qNumber.innerText = question.num

    checkBtn.onclick = () => checkAnswer(question.a)
  }

  function checkAnswer(answer) {
    if (aInput.value.toLowerCase() != answer) {
      mistakes.push(questions[i])
    }

    i++
    if (questions[i]) {
      showQuestion(questions[i])
    }
    else {
      showResults()
      checkBtn.onclick = showResults
    }
  }
}

const dict = {
  2: 'Binary',
  8: 'Octal',
  10: 'Decimal',
  16: 'Hexadecimal',
}



import { prepareQuestions } from "./questions.js"