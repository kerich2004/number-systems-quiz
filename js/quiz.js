export { startQuiz }

function startQuiz() {
  const checkBtn = document.getElementById('check')
  const aInput = document.querySelector('#guess')
  const showResults = checkBtn.onclick
  const questions = prepareQuestions()

  let i = 0

  showQuestion(questions[0])

  console.log(questions)

  checkBtn.onclick = checkAnswer

  function showQuestion(question) {
    const fromSpan = document.querySelector('.from')
    const toSpan = document.querySelector('.to')
    const qSpan = document.querySelector('.guess-number')
    const qNumber = document.querySelector('.question-number')
    const qTotalSpan = document.querySelector('.question-total')
    const qTotalLength = Object.keys(questions).length;

    fromSpan.innerText = dict[question.from]
    toSpan.innerText = dict[question.to]
    qSpan.innerText = question.q
    aInput.value = ''
    qNumber.innerText = question.num
    qTotalSpan.innerText = qTotalLength
  }

  function checkAnswer() {
    const userAnswer = aInput.value.trim().toLowerCase()

    if (userAnswer != questions[i].a) {
      questions[i].userAnswer = userAnswer
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

import { prepareQuestions } from "./questions.js"
import { mistakes } from "./mistakes.js"
import { dict } from "./dict.js"