export { assignListeners }

function assignListeners() {
    for (const btn of screenButtons) {
        btn.onclick = () => {
            const screen = btn.dataset.id

            goTo(screen)
        }
    }
}

const screenButtons = document.querySelectorAll('#play, #check, #new')

import { goTo } from "./goto.js"