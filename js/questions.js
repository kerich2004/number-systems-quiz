export { prepareQuestions }

function prepareQuestions() {
  const params = Object.fromEntries(new FormData(options))
  const questions = []
  console.log(params)

  for (let i = 0; i < params.count; i++) {
    const system = +params.system || rnd([2, 8, 16])
    const from = params.direction == 'from' ? system : params.direction == 'to' ? 10 : rnd([system, 10])
    const to = params.direction == 'from' ? 10 : params.direction == 'to' ? system : from == 10 ? system : 10

    questions.push(new Question(i + 1, params.digits, from, to))
  }

  return questions
}

import { rnd } from "./rnd.js"
import { Question } from "./question.js"