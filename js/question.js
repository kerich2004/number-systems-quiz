export { Question }

function Question(num, digits, from, to) {
  const max = parseInt(((parseInt(10, from) - 1).toString(from)).repeat(digits), from)
  const random = rnd(0, max)
  
  this.num = num
  this.from = from
  this.to = to
  this.q = random.toString(from)
  this.a = random.toString(to)
}


import { rnd } from "./rnd.js"