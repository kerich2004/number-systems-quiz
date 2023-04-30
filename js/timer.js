export { runTimer }

function runTimer(secondCount, callback) {
  const timer = document.querySelector('.timer')

  let count = secondCount

  const timerId = setInterval(() => {
    if (count == 0) {
      timer.innerText = ''
      clearInterval(timerId)
      callback()
    }
    else timer.innerText = --count

    
  }, 1000)

  timer.innerText = count
  
  return function stopCount() {
    clearInterval(timerId)
  }
}