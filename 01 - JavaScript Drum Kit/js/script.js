const audioElements = Array.from(document.getElementsByTagName('audio'))
const availableKeyCodes = audioElements.map(element => +element.dataset.key)

const playAudio = keyCode => {
  if (!availableKeyCodes.includes(keyCode)) {
    return
  }

  const pressedButton = document.querySelector(`.key[data-key="${keyCode}"]`)
  pressedButton.classList.add('playing')
  
  const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`)
  const audio = new Audio(audioElement.getAttribute('src'))
  audio.play()
}

function removeTransition(e) {
  // Skip it if it's a transform
  if (e.propertyName !== 'transform') {
    return
  }

  this.classList.remove('playing')
}

const keys = Array.from(document.querySelectorAll('.key'))
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', e => playAudio(e.keyCode))
