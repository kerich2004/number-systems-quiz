export { goTo }

function goTo(screen) {
    document.querySelector('section:not([hidden])')?.setAttribute('hidden', '')
    document.getElementById(screen)?.removeAttribute('hidden')

    if (screen == 'results') showMistakes()
}

import { showMistakes } from './mistakes.js'