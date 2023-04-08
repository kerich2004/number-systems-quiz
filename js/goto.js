export { goTo }

function goTo(screen) {
    document.querySelector('section:not([hidden])')?.setAttribute('hidden', '')
    document.getElementById(screen)?.removeAttribute('hidden')
}