export { prepareQuestions }

function prepareQuestions() {
  const params = Object.fromEntries(new FormData(options))
  const questions = []
  console.log(params)

  for (let i = 0; i < params.count; i++) {
    const system = +params.system || rnd([2, 8, 16])
    const from = params.direction == 'from' ? system : params.direction == 'to' ? 'decimal' : rnd([system, 'decimal'])
    const to = params.direction == 'from' ? 'decimal' : params.direction == 'to' ? system : from == 'decimal' ? system : 'decimal'

    questions.push(new Question(i + 1, params.digits, from, to))
  }

  return questions
}