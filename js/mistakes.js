export { mistakes, showMistakes }

const mistakes = []

function showMistakes() {
  const { correctAnswerCount } = showMistakes
  const resultHeader = document.querySelector('.result')
  const tableBody = document.querySelector('.mistakes > tbody')
  const count = options.count.value
  const percentage = Math.round((correctAnswerCount) / count * 100)

  resultHeader.innerText = `Correct: ${correctAnswerCount} out of ${count} (${percentage}%)`
  tableBody.innerHTML = ''

  for (const mistake of mistakes.splice(0)) {
    const row = tableBody.insertRow()

    row.insertCell().append(mistake.num)
    row.insertCell().append(`${dict[mistake.from]} ${mistake.q.toUpperCase()} to ${dict[mistake.to]}`)
    row.insertCell().append(mistake.a)
    row.insertCell().append(mistake.userAnswer)
  }
}

import { dict } from "./dict.js"