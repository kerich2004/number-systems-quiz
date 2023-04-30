export { assignListeners }

function assignListeners() {
    for (const btn of screenButtons) {
        btn.onclick = () => {
            const screen = btn.dataset.id

            goTo(screen)
        }
    }

    document.getElementById('play').addEventListener('click', startQuiz)
}

const screenButtons = document.querySelectorAll('#play, #check, #new')

import { goTo } from "./goto.js"
import { startQuiz } from "./quiz.js"